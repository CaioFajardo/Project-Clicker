"use client"

import { useState } from "react"

export default function Home() {
  const [dinheiro, setDinheiro] = useState(0)
  const [valorClique, setValorClique] = useState(1)
  const [upgrade, setUpgrade] = useState({
    nome: "mouse",
    precoInicial: 10,
    multiplicador: 1.15,
    nivel: 0,
    aumento: 1
  })

  const preco = upgrade.precoInicial * upgrade.multiplicador ** upgrade.nivel

  const clique = () => {
    setDinheiro(dinheiro + valorClique)
  }

  const comprar = () => {
    if (dinheiro < preco) {
      return
    }

    setDinheiro(dinheiro - preco)

    setValorClique(valorClique + upgrade.aumento)
    
    setUpgrade({...upgrade, nivel: upgrade.nivel + 1})
  }

  return (
    <main className="min-h-screen bg-white flex flex-col gap-3 items-center justify-center">
      <button onClick={clique} className="bg-blue-500 text-white px-24 py-12 rounded text-2xl font-bold">
        +{valorClique} $
      </button>

      <button onClick={comprar} className="bg-red-500 text-white px-4 py-2 rounded">
        Upgrade: $ {preco.toFixed(2)}
      </button>

      <p className="text-black font-bold">Dinheiro: $ {dinheiro.toFixed(2)}</p>
    </main>
  )
}