<script lang="ts">
  export let labelSelect = "Label Select";
  export let selectOptions = [
    {
      value: 1,
      text: "Option 1",
    },
  ];
</script>

<div class="p-2">
  <label class="label">
    <span>{labelSelect}</span>
    <select class="select">
      {#each selectOptions as option}
        <option value={option.value}>{option.text}</option>
      {/each}
    </select>
  </label>
</div>
