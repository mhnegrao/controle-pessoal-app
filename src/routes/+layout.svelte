<script lang="ts">
  import "../app.postcss";

  // Floating UI for Popups
  import {
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow,
  } from "@floating-ui/dom";

  import { AppShell, storePopup } from "@skeletonlabs/skeleton";
  import type IMenuItem from "./menuItens";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";

  let menuItem: IMenuItem[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Financeiro",
      path: "/financeiro",
    },
    {
      name: "Projetos",
      path: "/projetos",
    },
    {
      name: "Tarefas",
      path: "/tarefas",
    },
    {
      name: "Sobre",
      path: "/about",
    },
  ];

  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>
<AppShell slotSidebarLeft="bg-red-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<Header headerText="MCP"/>
	</svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <!-- Insert the list: -->
    <nav class="list-nav">
      <ul>
        {#each menuItem as item}
          <li>
            <a class="list-nav-item" href={item.path}>
              {item.name}
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

