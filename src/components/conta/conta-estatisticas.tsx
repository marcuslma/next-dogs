"use client";

import React from "react";
import { VictoryBar, VictoryChart, VictoryPie } from "victory";

import { StatsData } from "@/actions/stats-get";

import AnimatedSection from "../section/animated-section";
import styles from "./conta-estatisticas.module.css";

type GraphData = {
  x: string;
  y: number;
};

export default function ContaEstatisticas({ data }: { data: StatsData[] }) {
  const [graph, setGraph] = React.useState<GraphData[]>([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    );

    setGraph(graphData);
  }, [data]);

  return (
    <AnimatedSection className="grid gap-8 grid-cols-2 mb-8 max-sm:grid-cols-1">
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>

      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: { fillOpacity: 0.9, stroke: "#fff", strokeWidth: 2 },
            labels: { fontSize: 14, fill: "#333" },
          }}
        />
      </div>

      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </AnimatedSection>
  );
}
