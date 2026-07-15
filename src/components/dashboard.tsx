'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import {
  LayoutDashboard,
  TrendingUp,
  Info,
  ClipboardCheck,
  Route,
  Settings,
  LogOut,
  Menu,
  X,
  LayoutGrid,
} from 'lucide-react'

// URL do hub de módulos (gateway) — só usada dentro do app nativo, pra
// alternar entre Governança/Upkeep/Reviews. <a> pura (não <Link>) porque é
// um app Next.js diferente por trás do gateway.
const HUB_URL = 'https://praxis-systems.com.br/bnbflex'
import { cn } from '@/lib/utils'
import {
  Avatar,
  AvatarFallback,
} from '@/components/ui/avatar'
import type {
  DashboardUser,
  InspecaoComUnidade,
  ChecklistItem,
  Unit,
  ViewId,
} from '@/lib/types'
import { VisaoGerencial } from '@/components/views/visao-gerencial'
import { Evolucao } from '@/components/views/evolucao'
import { Informacoes } from '@/components/views/informacoes'
import { ControleInspecoes } from '@/components/views/controle-inspecoes'
import { RotaManutencao } from '@/components/views/rota-manutencao'
import { Configuracoes } from '@/components/views/configuracoes'

const NAV: { id: ViewId; label: string; icon: typeof LayoutDashboard }[] = [
  { id: 'gerencial', label: 'Visão Gerencial', icon: LayoutDashboard },
  { id: 'evolucao', label: 'Evolução', icon: TrendingUp },
  { id: 'informacoes', label: 'Informações', icon: Info },
  { id: 'controle', label: 'Controle de Inspeções', icon: ClipboardCheck },
  { id: 'rota', label: 'Rota de Manutenção', icon: Route },
  { id: 'config', label: 'Configurações', icon: Settings },
]

export function Dashboard({
  user,
  unidades,
  itens,
  inspecoes,
}: {
  user: DashboardUser
  unidades: Unit[]
  itens: ChecklistItem[]
  inspecoes: InspecaoComUnidade[]
}) {
  const [view, setView] = useState<ViewId>('gerencial')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isNativeApp, setIsNativeApp] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsNativeApp(!!(window as any).Capacitor?.isNativePlatform?.())
  }, [])

  const iniciais = user.name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  async function handleSignOut() {
    await signOut({ redirect: false })
    router.push('/sign-in')
    router.refresh()
  }

  function go(id: ViewId) {
    setView(id)
    setMobileOpen(false)
  }

  return (
    <div className="flex min-h-svh bg-background text-foreground">
      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-border/70 bg-sidebar/80 backdrop-blur-xl transition-transform duration-300 md:translate-x-0',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex h-16 items-center gap-3 px-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background">
            <span className="text-sm font-semibold tracking-tight">BF</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">BNB Flex</p>
            <p className="text-xs text-muted-foreground">Manutenção</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {NAV.map((item) => {
            const Icon = item.icon
            const active = view === item.id
            return (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={cn(
                  'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                  active
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                )}
              >
                <Icon className="h-[18px] w-[18px] shrink-0" />
                <span className="truncate text-pretty">{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="border-t border-border/70 p-3">
          {isNativeApp && (
            <a
              href={HUB_URL}
              className="mb-1 flex w-full items-center gap-3 rounded-xl px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <LayoutGrid className="h-[18px] w-[18px] shrink-0" />
              Trocar módulo
            </a>
          )}
          <div className="flex items-center gap-3 rounded-xl px-2 py-2">
            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-accent text-xs font-semibold text-foreground">
                {iniciais}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1 leading-tight">
              <p className="truncate text-sm font-medium">{user.name}</p>
              <p className="truncate text-xs text-muted-foreground">
                {user.email}
              </p>
            </div>
            <button
              onClick={handleSignOut}
              aria-label="Sair"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <LogOut className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col md:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border/70 bg-background/70 px-4 backdrop-blur-xl md:px-8">
          <button
            className="rounded-lg p-2 text-muted-foreground hover:bg-accent md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">
              {NAV.find((n) => n.id === view)?.label}
            </h1>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 md:px-8 md:py-8">
          {view === 'gerencial' && (
            <VisaoGerencial
              unidades={unidades}
              itens={itens}
              inspecoes={inspecoes}
            />
          )}
          {view === 'evolucao' && <Evolucao inspecoes={inspecoes} />}
          {view === 'informacoes' && (
            <Informacoes unidades={unidades} inspecoes={inspecoes} />
          )}
          {view === 'controle' && (
            <ControleInspecoes
              unidades={unidades}
              itens={itens}
              inspecoes={inspecoes}
            />
          )}
          {view === 'rota' && (
            <RotaManutencao unidades={unidades} inspecoes={inspecoes} />
          )}
          {view === 'config' && (
            <Configuracoes
              unidades={unidades}
              itens={itens}
              user={user}
            />
          )}
        </main>
      </div>
    </div>
  )
}
