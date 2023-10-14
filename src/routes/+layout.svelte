<script lang="ts">
  import Icon from "@iconify/svelte";
  import "../app.postcss";
  import type IMenuItem from "./menuItens";
  // Floating UI for Popups
  import {
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow,
  } from "@floating-ui/dom";
  import { AppShell, Modal, storePopup } from "@skeletonlabs/skeleton";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";

  let menuItem: IMenuItem[] = [
    {
      name: "Home",
      path: "/",
      icon: "mdi:home",
    },
    {
      name: "Financeiro",
      path: "/financeiro",
      icon: "mdi:account-cash-outline",
    },
    {
      name: "Projetos",
      path: "/projetos",
      icon: "mdi:folder",
    },
    {
      name: "Tarefas",
      path: "/tarefas",
      icon: "mdi:book-clock-outline",
    },
    {
      name: "Sobre",
      path: "/about",
      icon: "mdi:pencil-circle",
    },
  ];
  import { initializeStores } from "@skeletonlabs/skeleton";

  initializeStores();
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<Modal />
<AppShell slotSidebarLeft="bg-red-500/5 w-56 p-4">
  <svelte:fragment slot="header">
    <Header headerText="MCP" />
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <!-- Insert the list: -->
    <nav class="list-nav">
      <ul>
        {#each menuItem as item}
          <li>
            <a class="list-nav-item text-2xl" href={item.path}>
              <span class="mr-2"><Icon icon={item.icon} class="big-icon"/></span>{item.name}
            </a>
          </li>{/each}
      </ul>
    </nav>
    <!-- --- -->
  </svelte:fragment>
  <div class="container mx-auto p-4 space-y-4">
    <slot />
  </div>
  <svelte:fragment slot="footer">
    <Footer />
  </svelte:fragment>
</AppShell>
