<script lang="ts">
    import { cn } from "~/utils/utils";
    interface Props {
        value?: number; // 0–100
        min?: number;
        max?: number;
        step?: number;
        disabled?: boolean;
        class?: string;
        onValueChange?: (value: number) => void;
    }
    let {
        value = $bindable(50),
        min = 0,
        max = 100,
        step = 1,
        disabled = false,
        class: className = "",
        onValueChange,
    }: Props = $props();

    // ── Arc geometry ────────────────────────────────────────────────────────────
    // The knob sweeps from -135° to +135° (270° total arc)
    const MIN_ANGLE = -135;
    const MAX_ANGLE = 135;
    const cx = 50;
    const cy = 50;
    const r = 40;
    function toRad(deg: number) {
        return (deg * Math.PI) / 180;
    }
    function arcPoint(angleDeg: number) {
        const a = toRad(angleDeg - 90); // -90 so 0° points up
        return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
    }
    const normalised = $derived(
        Math.max(0, Math.min(1, (value - min) / (max - min))),
    );
    const currentAngle = $derived(
        MIN_ANGLE + normalised * (MAX_ANGLE - MIN_ANGLE),
    );
    const rotationDeg = $derived(currentAngle); // for the body indicator
    // SVG arc path from MIN_ANGLE to currentAngle
    const arcPath = $derived(() => {
        const start = arcPoint(MIN_ANGLE);
        const end = arcPoint(currentAngle);
        const large = currentAngle - MIN_ANGLE > 180 ? 1 : 0;
        return `M ${start.x} ${start.y} A ${r} ${r} 0 ${large} 1 ${end.x} ${end.y}`;
    });
    // ── Pointer drag ────────────────────────────────────────────────────────────
    let dragging = false;
    let startY = 0;
    let startValue = 0;
    function onPointerDown(e: PointerEvent) {
        if (disabled) return;
        dragging = true;
        startY = e.clientY;
        startValue = value;
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    }
    function onPointerMove(e: PointerEvent) {
        if (!dragging) return;
        // Drag up = increase, drag down = decrease; 200px = full range
        const delta = -(e.clientY - startY) / 200;
        const raw = startValue + delta * (max - min);
        const snapped = Math.round(raw / step) * step;
        const clamped = Math.max(min, Math.min(max, snapped));
        onValueChange?.(clamped);
    }
    function onPointerUp(e: PointerEvent) {
        dragging = false;
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    }
    function onKeyDown(e: KeyboardEvent) {
        if (disabled) return;
        let next = value;
        if (e.key === "ArrowUp" || e.key === "ArrowRight")
            next = Math.min(max, value + step);
        if (e.key === "ArrowDown" || e.key === "ArrowLeft")
            next = Math.max(min, value - step);
        if (e.key === "Home") next = min;
        if (e.key === "End") next = max;
        if (next !== value) {
            e.preventDefault();
            onValueChange?.(next);
        }
    }
</script>

<div
    class={cn("relative inline-flex flex-col items-center gap-1", className)}
    role="presentation"
>
    <!-- Outer ring / slider surface -->
    <div
        class={cn(
            "relative flex cursor-grab touch-none rounded-full select-none",
            "bg-black border-2 border-[#424242]",
            "size-12",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "active:border-ring active:ring-ring active:cursor-grabbing active:ring-2",
            disabled && "pointer-events-none cursor-not-allowed opacity-50",
        )}
        role="slider"
        tabindex={disabled ? -1 : 0}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label={"Knob"}
        aria-disabled={disabled}
        onpointerdown={onPointerDown}
        onpointermove={onPointerMove}
        onpointerup={onPointerUp}
        onkeydown={onKeyDown}
    >
        <!-- Body (rotates with value) -->
        <div
            class={cn("absolute rounded-full inset-0")}
            style="transform: rotate({rotationDeg}deg)"
        >
            <!-- Indicator dot -->
            <div
                class={cn(
                    "absolute left-1/2 -translate-x-1/2 items-center",
                    "top-1",
                    "h-3",
                    "w-0.5",
                )}
            >
                <div
                    class="size-1.5 bg-white rounded-full absolute right-px translate-x-1"
                ></div>
            </div>
        </div>
    </div>
</div>
