<script>
    export let labelTextArea = "Label Text Area";
    export let rows = 4;
    export let placeholder = "Placeholder Text Area";
</script>
<div class="p-2">
    <label class="label font-semibold">
        <span>{labelTextArea}</span>
        <textarea class="textarea rounded-md" rows={rows} placeholder={placeholder} />
    </label>
</div>