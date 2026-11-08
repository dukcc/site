<script lang="ts">
    import ContactMap from "./ui/ContactMap.svelte";
    import Knob from "./ui/Knob.svelte";
    import SlateIcon from "~/icons/slate.svg";

    let posValue = $state(50);
    let meowMaxValue = $state(2);
    let pos89Value = $state(50);
    let freqValue = $state(50);

    const meowMaxNames: Record<number, string> = {
        0: "mow",
        1: "mew",
        2: "meow",
        3: "mrow",
    };
</script>

<section class="flex flex-col items-center relative">
    <div
        class="w-77 h-fit bg-mic rounded-14 rounded-b-none shadow-wow p-2.5 flex flex-col gap-2.5"
    >
        <div class="flex w-full justify-between items-center">
            <h3 class="font-titre font-bold text-shadow-wow">
                CONTACT_ESTABLISHER
            </h3>
            <h3 class="font-titre text-shadow-wow">SLT_CE3</h3>
            <img src={SlateIcon.src} alt="Slate" class="invert size-4.5" />
        </div>
        <div
            class="border border-white/50 rounded-sm w-full h-full grid grid-cols-2 grid-rows-2 p-2 gap-2"
        >
            <!-- pos` -->
            <div class="flex justify-between items-end">
                <div class="flex flex-col gap-1">
                    <p class="text-xs text-shadow-wow">pos`</p>
                    <p class="text-xs text-shadow-wow text-white/50">
                        {posValue}
                    </p>
                </div>
                <Knob value={posValue} onValueChange={(v) => (posValue = v)} />
            </div>
            <!-- meowmax` -->
            <div class="flex justify-between items-end">
                <div class="flex flex-col gap-1">
                    <p class="text-xs text-shadow-wow">meowmax`</p>
                    <p class="text-xs text-shadow-wow text-white/50">
                        {meowMaxNames[meowMaxValue]}
                    </p>
                </div>
                <Knob
                    value={meowMaxValue}
                    max={3}
                    onValueChange={(v) => (meowMaxValue = v)}
                />
            </div>
            <!-- pos89` -->
            <div class="flex justify-between items-end">
                <div class="flex flex-col gap-1">
                    <p class="text-xs text-shadow-wow">pos89`</p>
                    <p class="text-xs text-shadow-wow text-white/50">
                        {pos89Value}
                    </p>
                </div>
                <Knob
                    value={pos89Value}
                    max={89}
                    onValueChange={(v) => (pos89Value = v)}
                />
            </div>
            <!-- freq` -->
            <div class="flex justify-between items-end">
                <div class="flex flex-col gap-1">
                    <p class="text-xs text-shadow-wow">freq`</p>
                    <p class="text-xs text-shadow-wow text-white/50">
                        {freqValue}
                    </p>
                </div>
                <Knob
                    value={freqValue}
                    onValueChange={(v) => (freqValue = v)}
                />
            </div>
        </div>
    </div>
    <div class="size-83 bg-mic rounded-14 shadow-wow p-2.5">
        <ContactMap />
    </div>
</section>
