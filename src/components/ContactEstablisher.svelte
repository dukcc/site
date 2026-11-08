<script lang="ts">
    import Knob from "./ui/Knob.svelte";
    import SlateIcon from "~/icons/slate.svg";

    let posValue = $state(50);
</script>

<section class="flex flex-col items-center relative">
    <div
        class="w-77 h-fit bg-mic rounded-14 rounded-b-none shadow-wow p-2.5 flex flex-col gap-2.5"
    >
        <div class="flex w-full justify-between items-center">
            <h3 class="font-titre font-bold">CONTACT_ESTABLISHER</h3>
            <h3 class="font-titre">SLT_CE3</h3>
            <img src={SlateIcon.src} alt="Slate" class="invert size-4.5" />
        </div>
        <div class="border border-white/50 rounded-sm w-full h-full">
            <Knob value={posValue} onValueChange={(v) => (posValue = v)} />
        </div>
    </div>
    <div class="size-83 bg-mic rounded-14 shadow-wow p-2.5">
        <div class="bg-black rounded-sm w-full h-full">asd</div>
    </div>
</section>
