import { useEffect } from "react";

export default function useHelmet(title: string) {
  useEffect(() => {
    document.title = `Storeify - ${title}`;
  }, [title]);
}
