import { useEffect, useRef } from "react"
import {
  CandlestickSeries,
  ColorType,
  CrosshairMode,
  HistogramSeries,
  createChart,
  type CandlestickData,
  type HistogramData,
  type IChartApi,
} from "react-lightweight-charts"

import { cn } from "@/lib/utils"

interface TradingChartProps {
  className?: string
}

const CANDLE_DATA: CandlestickData[] = [
  { time: "2024-08-01", open: 61000, high: 61850, low: 60200, close: 61400 },
  { time: "2024-08-02", open: 61400, high: 62000, low: 60800, close: 61820 },
  { time: "2024-08-03", open: 61820, high: 62300, low: 61500, close: 61950 },
  { time: "2024-08-04", open: 61950, high: 62720, low: 61700, close: 62580 },
  { time: "2024-08-05", open: 62580, high: 63200, low: 62280, close: 62900 },
  { time: "2024-08-06", open: 62900, high: 63640, low: 62700, close: 63320 },
  { time: "2024-08-07", open: 63320, high: 64010, low: 63000, close: 63780 },
  { time: "2024-08-08", open: 63780, high: 64220, low: 63520, close: 64040 },
  { time: "2024-08-09", open: 64040, high: 64810, low: 63900, close: 64650 },
  { time: "2024-08-10", open: 64650, high: 65220, low: 64260, close: 64410 },
  { time: "2024-08-11", open: 64410, high: 64620, low: 63780, close: 64020 },
  { time: "2024-08-12", open: 64020, high: 64540, low: 63290, close: 63510 },
  { time: "2024-08-13", open: 63510, high: 63970, low: 63080, close: 63300 },
  { time: "2024-08-14", open: 63300, high: 63820, low: 62540, close: 62920 },
  { time: "2024-08-15", open: 62920, high: 63140, low: 62080, close: 62240 },
  { time: "2024-08-16", open: 62240, high: 62720, low: 61820, close: 62560 },
  { time: "2024-08-17", open: 62560, high: 63240, low: 62320, close: 63080 },
  { time: "2024-08-18", open: 63080, high: 63880, low: 62800, close: 63640 },
  { time: "2024-08-19", open: 63640, high: 64260, low: 63200, close: 63460 },
  { time: "2024-08-20", open: 63460, high: 63980, low: 63040, close: 63120 },
  { time: "2024-08-21", open: 63120, high: 63700, low: 62860, close: 63540 },
  { time: "2024-08-22", open: 63540, high: 64480, low: 63360, close: 64220 },
  { time: "2024-08-23", open: 64220, high: 64950, low: 64010, close: 64820 },
  { time: "2024-08-24", open: 64820, high: 65540, low: 64460, close: 65280 },
  { time: "2024-08-25", open: 65280, high: 65820, low: 64840, close: 65060 },
  { time: "2024-08-26", open: 65060, high: 65420, low: 64610, close: 64840 },
  { time: "2024-08-27", open: 64840, high: 65020, low: 64080, close: 64240 },
  { time: "2024-08-28", open: 64240, high: 64830, low: 63820, close: 64690 },
  { time: "2024-08-29", open: 64690, high: 65380, low: 64440, close: 65210 },
  { time: "2024-08-30", open: 65210, high: 66040, low: 65060, close: 65720 },
]

const VOLUME_DATA: HistogramData[] = CANDLE_DATA.map((bar) => ({
  time: bar.time,
  value: Math.round(Math.random() * 450) + 50,
  color: bar.close >= bar.open ? "#22c55e" : "#ef4444",
}))

export function TradingChart({ className }: TradingChartProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const chart: IChartApi = createChart(element, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#94a3b8",
      },
      grid: {
        vertLines: { color: "rgba(148, 163, 184, 0.12)" },
        horzLines: { color: "rgba(148, 163, 184, 0.12)" },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      rightPriceScale: {
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
      },
    })

    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#22c55e",
      downColor: "#ef4444",
      borderVisible: false,
      wickUpColor: "#22c55e",
      wickDownColor: "#ef4444",
    })
    candleSeries.setData(CANDLE_DATA)

    const volumeSeries = chart.addSeries(HistogramSeries, {
      priceScaleId: "volume",
      color: "#22c55e",
      priceFormat: {
        type: "volume",
      },
      priceLineVisible: false,
      base: 0,
    })

    chart.priceScale("volume").applyOptions({
      scaleMargins: {
        top: 0.82,
        bottom: 0,
      },
    })

    volumeSeries.setData(VOLUME_DATA)

    const applyResize = () => {
      const rect = element.getBoundingClientRect()
      if (rect.width && rect.height) {
        chart.resize(Math.floor(rect.width), Math.floor(rect.height))
      }
      chart.timeScale().fitContent()
    }

    applyResize()
    requestAnimationFrame(applyResize)

    const resizeObserver = new ResizeObserver(applyResize)
    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
      chart.remove()
    }
  }, [])

  return <div ref={containerRef} className={cn("h-full w-full", className)} />
}
