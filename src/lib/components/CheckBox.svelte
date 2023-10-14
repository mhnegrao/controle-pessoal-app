<script>
  export let thisOptions = [{ id: 1, optionLabel: "Option 1", checked: false }];
</script>

<div class="p-2">
  <div class="space-y-2">
    {#each thisOptions as opt}
      <label class="flex items-center space-x-2">
        <input class="checkbox" type="checkbox" checked={opt.checked} />
        <p>{opt.optionLabel}</p>
      </label>
    {/each}
  </div>
</div>
