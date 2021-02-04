import { DashboardHeroComponent } from './dashboard-hero.component';
import { Hero } from './hero.model';

describe('DashboardHeroComponent', () => {

  it('raises the selected event when clicked', () => {
    const comp = new DashboardHeroComponent();
    const hero: Hero = { id: 42, name: 'Test' };
    comp.hero = hero;

    comp.selected.subscribe((selectedHero: Hero) => expect(selectedHero).toBe(hero));
    comp.click();
  });
});
