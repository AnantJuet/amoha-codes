# Walkthrough - Tutorial Bar Scroll Behavior

I have updated the scroll logic for the tech category bar to better support trackpad gestures while maintaining the vertical-to-horizontal conversion for mouse wheels.

## Changes Made

### [TutorialPageComponent.tsx](file:///c:/Users/anant/Downloads/amoha-master/amoha-master/frontend/src/components/tutorial/TutorialMainPageCards/TutorialPageComponent.tsx)

Modified the `handleWheel` logic to:
- **Enable Trackpad Horizontal Swipe**: Native horizontal movement (`deltaX`) is now allowed to pass through, enabling smooth horizontal scrolling with the trackpad.
- **Support Vertical Page Scroll**: Trackpad vertical swipes no longer scroll the bar horizontally. Instead, the default browser behavior is preserved, allowing the vertical swipe to scroll the entire page.
- **Maintain Mouse Wheel Scrolling**: Standard vertical mouse wheel scrolls (detected via discrete steps or `deltaMode`) are still converted to horizontal movement for the bar.

```typescript
const handleWheel = (e: WheelEvent) => {
  if (scrollRef.current && navRef.current && navRef.current.contains(e.target as Node)) {
    // 1. Allow native horizontal scroll (trackpad)
    if (Math.abs(e.deltaX) > 0) return;

    // 2. Distinguish mouse wheel vs trackpad vertical swipe
    const isMouseWheel = e.deltaMode !== 0 || Math.abs(e.deltaY) >= 100 || (e.deltaY % 40 === 0 && e.deltaY !== 0);

    if (isMouseWheel) {
      // Convert vertical scroll to horizontal scroll
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    }
    // Vertical trackpad swipes will now scroll the page natively
  }
};
```

## Verification Results

The logic has been verified to correctly distinguish between different scroll types:
- **Horizontal Trackpad Swipe**: `deltaX > 0` -> No `preventDefault` -> Native horizontal scroll.
- **Vertical Trackpad Swipe**: `deltaX = 0`, `isMouseWheel = false` -> No `preventDefault` -> Native page scroll.
- **Vertical Mouse Wheel**: `deltaX = 0`, `isMouseWheel = true` -> `preventDefault` -> Bar scrolls horizontally.
