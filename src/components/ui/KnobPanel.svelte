<script lang="ts">
    import { validate } from "astro/zod";
    import Knob from "./Knob.svelte";
    import { ce3Store } from "~/utils/ce3store";

    const meowMaxNames: Record<number, string> = {
        0: "mow",
        1: "mew",
        2: "meow",
        3: "mrow",
    };
</script>

<div
    class="border border-white/50 rounded-sm w-full h-full grid grid-cols-2 grid-rows-2 p-2 gap-2"
>
    <!-- pos` -->
    <div class="flex justify-between items-end">
        <div class="flex flex-col gap-1">
            <p class="text-xs text-shadow-wow">pos`</p>
            <p class="text-xs text-shadow-wow text-white/50">
                {$ce3Store.pos}
            </p>
        </div>
        <Knob
            value={$ce3Store.pos}
            onValueChange={(v) =>
                ce3Store.set({
                    ...ce3Store.get(),
                    pos: v,
                })}
        />
    </div>
    <!-- meowmax` -->
    <div class="flex justify-between items-end">
        <div class="flex flex-col gap-1">
            <p class="text-xs text-shadow-wow">meowmax`</p>
            <p class="text-xs text-shadow-wow text-white/50">
                {meowMaxNames[$ce3Store.meowMax]}
            </p>
        </div>
        <Knob
            value={$ce3Store.meowMax}
            max={3}
            onValueChange={(v) =>
                ce3Store.set({
                    ...ce3Store.get(),
                    meowMax: v,
                })}
        />
    </div>
    <!-- pos89` -->
    <div class="flex justify-between items-end">
        <div class="flex flex-col gap-1">
            <p class="text-xs text-shadow-wow">pos89`</p>
            <p class="text-xs text-shadow-wow text-white/50">
                {$ce3Store.pos89}
            </p>
        </div>
        <Knob
            value={$ce3Store.pos89}
            max={89}
            onValueChange={(v) =>
                ce3Store.set({
                    ...ce3Store.get(),
                    pos89: v,
                })}
        />
    </div>
    <!-- freq` -->
    <div class="flex justify-between items-end">
        <div class="flex flex-col gap-1">
            <p class="text-xs text-shadow-wow">freq`</p>
            <p class="text-xs text-shadow-wow text-white/50">
                {$ce3Store.freq}
            </p>
        </div>
        <Knob
            value={$ce3Store.freq}
            max={10}
            onValueChange={(v) =>
                ce3Store.set({
                    ...ce3Store.get(),
                    freq: v,
                })}
        />
    </div>
</div>
