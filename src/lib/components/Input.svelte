<script lang="ts">
    export let labelInput:string = "Label";
    export let placeholder:string = "Placeholder";
    export let myClass:string="input rounded-md";
    export let valueInput:string = "";
</script>
<div class="p-2">
    <label class="label font-semibold">
        <span>{labelInput}</span>
        <input class="{myClass}" type="text" placeholder={placeholder} bind:value={valueInput}/>
    </label>
</div>

				