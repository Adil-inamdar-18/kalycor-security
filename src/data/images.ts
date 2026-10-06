// Every slot is a local file in /public/images (all 12 are included in the project).
// To use your own photography, overwrite the JPG with the same filename. No code change needed.
export const IMG = {
  hero: '/images/hero.jpg', about: '/images/about.jpg', guard: '/images/guard.jpg', cctv: '/images/cctv.jpg', control: '/images/control.jpg', mall: '/images/mall.jpg',
  retail: '/images/retail.jpg', tower: '/images/tower.jpg', lobby: '/images/lobby.jpg', facility: '/images/facility.jpg', office: '/images/office.jpg', cta: '/images/cta.jpg',
} as const;
export type ImgKey = keyof typeof IMG;
