import { useEffect, useRef, useState } from 'react'
import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import type { JSX } from 'react'

type TextAlign = 'left' | 'center' | 'right' | 'justify'
type AnchorX = 'left' | 'center' | 'right' | number
type AnchorY = 'top' | 'top-baseline' | 'middle' | 'bottom-baseline' | 'bottom' | number

export interface TypewriterText3DProps {
  /** Texto completo a ser exibido (obrigatório) */
  text: string
  /** Cor do texto (ex: "#ffffff", "orange") — default "white" */
  color?: string
  /** Tamanho da fonte em unidades da cena — default 1 */
  fontSize?: number
  /** URL de um arquivo de fonte .ttf/.otf/.woff (opcional) */
  font?: string
  /** Largura máxima antes de quebrar a linha (undefined = sem quebra automática) */
  maxWidth?: number
  /** Alinhamento do texto — default "left" */
  textAlign?: TextAlign
  /** Espaçamento entre linhas — default 1.2 */
  lineHeight?: number
  /** Espaçamento entre letras — default 0 */
  letterSpacing?: number
  /** Caracteres revelados por segundo — default 15 */
  speed?: number
  /** Atraso em segundos antes de começar a animar — default 0 */
  startDelay?: number
  /** Se true, reinicia a animação ao terminar — default false */
  loop?: boolean
  /** Se true, mostra um cursor "|" piscando enquanto digita — default true */
  cursor?: boolean
  /** Se true, o cursor continua piscando mesmo após o texto terminar de ser digitado — default false */
  cursorBlinkAfterComplete?: boolean
  /**
   * Se true, insere pausas extras ao digitar certos caracteres (pontuação),
   * simulando alguém escrevendo naturalmente — default false
   */
  enablePunctuationPauses?: boolean
  /**
   * Duração extra (em segundos) de pausa após cada caractere-chave.
   * Só tem efeito quando `enablePunctuationPauses` é true.
   * Default: { '.': 0.45, '!': 0.45, '?': 0.45, ',': 0.2, ';': 0.25, ':': 0.25, '\n': 0.35 }
   */
  pauseDurations?: Record<string, number>
  /** Callback chamado quando a animação começa */
  onStart?: () => void
  /** Callback chamado quando a animação termina */
  onComplete?: () => void
  /** Posição do texto na cena */
  position?: [number, number, number]
  /** Rotação do texto na cena */
  rotation?: [number, number, number]
  /** Ancoragem horizontal do texto (drei Text prop) */
  anchorX?: AnchorX
  /** Ancoragem vertical do texto (drei Text prop) */
  anchorY?: AnchorY
  /** Qualquer outra prop é repassada para o <Text> do drei */
  [key: string]: unknown
}

const DEFAULT_PAUSE_DURATIONS: Record<string, number> = {
  '.': 0.45,
  '!': 0.45,
  '?': 0.45,
  ',': 0.2,
  ';': 0.25,
  ':': 0.25,
  '\n': 0.35,
}

/**
 * TypewriterText3D
 * Componente de texto 3D (React Three Fiber + Drei) com animação estilo
 * "máquina de escrever" (typewriter), e atributos configuráveis de
 * cor, tamanho de fonte, fonte e quebra de linha.
 */
export default function TypewriterText3D({
  text = '',
  color = 'white',
  fontSize = 1,
  font,
  maxWidth,
  textAlign = 'left',
  lineHeight = 1.2,
  letterSpacing = 0,
  speed = 15,
  startDelay = 0,
  loop = false,
  cursor = true,
  cursorBlinkAfterComplete = false,
  enablePunctuationPauses = false,
  pauseDurations = DEFAULT_PAUSE_DURATIONS,
  onStart,
  onComplete,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  anchorX = 'center',
  anchorY = 'middle',
  ...rest
}: TypewriterText3DProps): JSX.Element {
  const [displayedText, setDisplayedText] = useState<string>('')
  const [showCursor, setShowCursor] = useState<boolean>(true)

  const elapsedRef = useRef<number>(0)
  const charIndexRef = useRef<number>(0)
  const nextCharTimeRef = useRef<number>(0)
  const startedRef = useRef<boolean>(false)
  const finishedRef = useRef<boolean>(false)
  const cursorBlinkRef = useRef<number>(0)

  // Reseta a animação sempre que o texto (ou velocidade) mudar
  useEffect(() => {
    elapsedRef.current = 0
    charIndexRef.current = 0
    nextCharTimeRef.current = 0
    startedRef.current = false
    finishedRef.current = false
    setDisplayedText('')
  }, [text, speed, startDelay])

  useFrame((_, delta: number) => {
    // Pisca o cursor independentemente do estado da digitação
    if (cursor) {
      cursorBlinkRef.current += delta
      if (cursorBlinkRef.current > 0.5) {
        cursorBlinkRef.current = 0
        setShowCursor((prev) => !prev)
      }
    }

    if (finishedRef.current) return

    elapsedRef.current += delta

    // Aguarda o delay inicial
    if (elapsedRef.current < startDelay) return

    if (!startedRef.current) {
      startedRef.current = true
      nextCharTimeRef.current = elapsedRef.current
      onStart?.()
    }

    // Revela caracteres um a um, agendando o tempo do próximo com base
    // na velocidade base e, se habilitado, pausas extras em pontuação.
    let index = charIndexRef.current
    let nextTime = nextCharTimeRef.current
    const baseDelay = 1 / speed

    while (index < text.length && elapsedRef.current >= nextTime) {
      index += 1
      const lastChar = text[index - 1]
      let delay = baseDelay

      if (enablePunctuationPauses && pauseDurations[lastChar]) {
        delay += pauseDurations[lastChar]
      }

      nextTime += delay
    }

    if (index !== charIndexRef.current) {
      charIndexRef.current = index
      nextCharTimeRef.current = nextTime
      setDisplayedText(text.slice(0, index))
    }

    if (charIndexRef.current >= text.length) {
      finishedRef.current = true
      onComplete?.()

      if (loop) {
        // Reinicia após um pequeno intervalo
        setTimeout(() => {
          elapsedRef.current = 0
          charIndexRef.current = 0
          nextCharTimeRef.current = 0
          startedRef.current = false
          finishedRef.current = false
          setDisplayedText('')
        }, 800)
      }
    }
  })

  const cursorChar =
    cursor &&
    showCursor &&
    startedRef.current &&
    (!finishedRef.current || cursorBlinkAfterComplete)
      ? '|'
      : ''

  return (
    <Text
      position={position}
      rotation={rotation}
      color={color}
      fontSize={fontSize}
      font={font}
      maxWidth={maxWidth}
      textAlign={textAlign}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      anchorX={anchorX}
      anchorY={anchorY}
      overflowWrap="normal"
      {...rest}
    >
      {displayedText + cursorChar}
    </Text>
  )
}
