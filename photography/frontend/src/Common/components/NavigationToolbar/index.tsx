import { FC } from "react";
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from "react-router";
import './index.css'

interface NavigationToolbarProps {
  previouseURL: string;
}

const NavigationToolbar: FC<NavigationToolbarProps> = ({ previouseURL }) => {
  const navigate = useNavigate();

  return (
    <div className="navigation-toolbar">
      <ArrowLeft
        className="link back"
        onClick={() => navigate(previouseURL)}
      />

      <a
        className="link link-buy book"
        onClick={() => { }}
      >
        Book a session
      </a>
    </div>
  )
}

export default NavigationToolbar;
