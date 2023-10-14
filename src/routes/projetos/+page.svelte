<script>
	import Titulo  from '$lib/components/Titulo.svelte';
    import Container from "$lib/components/Container.svelte";
  import Icon from "@iconify/svelte";
</script>
<Container>
  <span>
    <Icon
        icon="mdi:book-open-variant"
        height="none"
        style="width: 96px; height: 96px"
    />
  </span>
  <Titulo title="Projetos" myClass="h2" />
  <section>
    <p class="h-2 font-semibold">Projetos do Github</p>
  </section>
</Container>
