<script>
  export let ItensList = [
    {
      title: "title",
      description: "description",
    },
  ];
</script>

<div class="p-2">
  <dl class="list-dl">
    {#each ItensList as item}
      <div>
        <span class="badge bg-primary-500">💀</span>
        <span class="flex-auto">
          <dt class="font-semibold">{item.title.toUpperCase()}</dt>
          <dd>{item.description}</dd>
        </span>
      </div>
    {/each}
    <!-- ... -->
  </dl>
</div>
