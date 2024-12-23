import { useEffect } from "react";

export default function useHelmet(title: string) {
  useEffect(() => {
    document.title = `STOREIFY - ${title}`;
  }, [title]);
}
