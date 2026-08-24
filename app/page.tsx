"use client"

import { useState } from "react"

type Upgrade = {
  nome: string,
  tipo: "clique" | "passivo"
  precoInicial: number,
  multiplicador: number,
  nivel: number,
  aumento: number
}

export default function Home() {
  const [dinheiro, setDinheiro] = useState(0)
  const [valorClique, setValorClique] = useState(1)
  const [upgrades, setUpgrades] = useState<Upgrade[]>([

    {
      nome: "Upgrade 1",
      tipo: "clique",
      precoInicial: 10,
      multiplicador: 1.15,
      nivel: 0,
      aumento: 1
    },

    {
      nome: "Upgrade 2",
      tipo: "passivo",
      precoInicial: 50,
      multiplicador: 1.15,
      nivel: 0,
      aumento: 1
    },

    {
      nome: "Upgrade 3",
      tipo: "passivo",
      precoInicial: 250,
      multiplicador: 1.15,
      nivel: 0,
      aumento: 5
    },

    {
      nome: "Upgrade 4",
      tipo: "passivo",
      precoInicial: 1000,
      multiplicador: 1.15,
      nivel: 0,
      aumento: 10
    },

    {
      nome: "Upgrade 5",
      tipo: "passivo",
      precoInicial: 10000,
      multiplicador: 1.15,
      nivel: 0,
      aumento: 50
    }
  ])

  const clique = () => {
    setDinheiro(dinheiro + valorClique)
  }

  const comprar = (upgrade: Upgrade) => {
    const preco = upgrade.precoInicial * upgrade.multiplicador ** upgrade.nivel

    if (dinheiro < preco) {
      return
    }

    setDinheiro((dinheiro) => dinheiro - preco)

    if (upgrade.tipo === "clique") {
      setValorClique(valorClique + upgrade.aumento)
    }

    setUpgrades(upgrades.map((item) => {
      if (item === upgrade) {
        return {
          ...item,
          nivel: item.nivel + 1
        }
      }
      return item
    }))
  }

  return (
    <main className="min-h-screen bg-white flex">
      <div className="w-3/4 flex flex-col gap-3 items-center justify-center">
        <button onClick={clique} className="bg-blue-500 text-white px-24 py-12 rounded text-2xl font-bold">
          +{valorClique} $
        </button>

        <p className="text-black font-bold">Dinheiro: $ {dinheiro.toFixed(2)}</p>
      </div>

      <div className="w-1/4 flex flex-col border-l border-black">
        {upgrades.map((upgrade) => {
          const preco = upgrade.precoInicial * upgrade.multiplicador ** upgrade.nivel

          return (
            <button key={upgrade.nome} onClick={() => comprar(upgrade)} className="w-full border border-black h-24">
              {upgrade.nome}<br />
              $ {preco.toFixed(2)}
            </button>
          )
        })}
      </div>
    </main>
  )
}