"use client"

import { useState } from "react"

export default function Home() {
  const [dinheiro, setDinheiro] = useState(0)
  const [valorClique, setValorClique] = useState(1)

  const upgrade = {
    preco: 10,
    aumento: 1
  }

  const clique = () => {
    setDinheiro(dinheiro + valorClique)
  }

  const comprar = () => {
    if (dinheiro < upgrade.preco) {
      return
    }

    setDinheiro(dinheiro - upgrade.preco)

    setValorClique(valorClique + upgrade.aumento)
  }

  return (
    <main className="min-h-screen bg-white flex flex-col gap-3 items-center justify-center">
      <button onClick={clique} className="bg-blue-500 text-white px-24 py-12 rounded text-2xl font-bold">
        +1
      </button>

      <button onClick={comprar} className="bg-red-500 text-white px-4 py-2 rounded">
        -1
      </button>

      <p className="text-black font-bold">Dinheiro: {dinheiro}</p>
    </main>
  )
}