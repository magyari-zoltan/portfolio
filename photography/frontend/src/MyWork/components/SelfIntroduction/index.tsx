import { FC, RefObject } from 'react';
import { Camera, Instagram, Facebook, ChevronDown } from 'lucide-react';
import { scrollToRefObject } from '../../../Common/helpers/uiEffects';
import { useTitleOpacity } from "./hooks/useSelfIntroductionOpacity";
import './index.css';

interface SelfIntroductionProps {
  width: number;
  scrollable: RefObject<HTMLElement | null>;
  scrollTo: RefObject<HTMLElement | null>;
}

const SelfIntroduction: FC<SelfIntroductionProps> = ({ width, scrollable, scrollTo }) => {
  const titleOpacity = useTitleOpacity(scrollable, width);

  return (
    <section className="self-introduction" style={{ opacity: titleOpacity }}>
      <h2 className="title">Hi! I'm Magyari Zoltán</h2>
      <p className="description">I'm a portrait photographer based in Targu Mures / Romania</p>

      <div className="social-media">
        <Camera />
        <Instagram />
        <Facebook />
      </div>

      <ChevronDown onClick={() => scrollToRefObject(scrollable, scrollTo)} />
    </section>
  );
}

export default SelfIntroduction;
