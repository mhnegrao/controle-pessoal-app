<script>
  export let thisOptions = [{ id: 1, optionLabel: "Option 1", value: 1 }];
</script>

<div class="p-2">
  {#each thisOptions as opt}
    <div class="space-y-2">
      <label class="flex items-center space-x-2">
        <input
          class="radio"
          type="radio"
          checked
          name="radio-direct"
          value={opt.value}
        />
        <p>{opt.optionLabel}</p>
      </label>
    </div>
  {/each}
</div>
