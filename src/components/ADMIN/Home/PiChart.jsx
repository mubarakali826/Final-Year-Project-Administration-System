"use client"

import * as React from "react"
import { useLocation } from "react-router-dom"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const adminChartData = [
  { category: "active projects", count: 163, fill: "var(--color-chrome)" },
  { category: "completed projects", count: 23, fill: "var(--color-safari)" },
  { category: "unassigned students", count: 81, fill: "var(--color-firefox)" },
  { category: "in-house projects", count: 44, fill: "var(--color-edge)" },
]

const supervisorChartData = [
  { category: "web projects", count: 18, fill: "var(--color-chrome)" },
  { category: "app projects", count: 15, fill: "var(--color-safari)" },
  { category: "IOT projects", count: 6, fill: "var(--color-firefox)" },
  { category: "ML projects", count: 2, fill: "var(--color-edge)" },
]

const chartConfig = {
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
}

export default function Component() {
  const location = useLocation()

  // Determine the chart data based on the current path
  const chartData = location.pathname === "/supervisor/home" ? supervisorChartData : adminChartData

  const totalProjects = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0)
  }, [chartData])

  return (
    <Card className="flex flex-col chart">
      <CardHeader className="items-center pb-0">
        <CardTitle>Projects Distribution</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[230px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="category"
              innerRadius={60}
              strokeWidth={10}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalProjects.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          projects
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
