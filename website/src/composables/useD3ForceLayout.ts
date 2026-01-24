import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter,
  forceCollide,
} from 'd3-force'
import type { Node, Edge } from '@vue-flow/core'

export async function useD3ForceLayout(
  nodes: Node[],
  edges: Edge[],
  width: number,
  height: number,
): Promise<Node[]> {
  // d3 mutates nodes in-place → clone to be safe
  const simNodes = nodes.map(n => ({ ...n })) as any[]

  const sim = forceSimulation(simNodes)
    .force(
      'link',
      forceLink(edges as any)
        .id((d: any) => d.id)
        .distance(220)
        .strength(0.8),
    )
    .force('charge', forceManyBody().strength(-900).distanceMax(500))
    .force('center', forceCenter(width / 2, height / 2))
    .force('collision', forceCollide(90).strength(0.9).iterations(3))
    .stop()

  // Run simulation
  for (let i = 0; i < 300; i++) {
    sim.tick()
  }

  // 🔑 CRITICAL STEP: map x/y → VueFlow position
  return simNodes.map(n => ({
    ...n,
    position: {
      x: n.x ?? 0,
      y: n.y ?? 0,
    },
  }))
}
