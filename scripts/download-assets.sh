#!/usr/bin/env bash
set -euo pipefail
P="https://www.figma.com/api/mcp/asset/8fe29dc9-d273-4c9a-9c3e-1ec1dd4c2bd0"
D="public/images"
get() { curl -fL "$P/$1" -o "$D/$2"; }

get 69167.png dream-photo.png        # Frame 29  (447×1203 photo)
get 4b946.png hero-photo.png         # Rectangle 750 (hero building)
get 1f7c6.svg hero-card.svg          # Subtract (hero card w/ notch)
get b7831.svg hero-intro-card.svg    # Frame 36 (intro card fill)
get cf42a.svg watermark.svg          # Frame 8 (decorative chevron)
get 534c1.svg stars.svg              # Component 29 (5 stars)
get 9f8f9.svg logo.svg               # header logo
get 0174c.svg logo-footer.svg        # footer logo
