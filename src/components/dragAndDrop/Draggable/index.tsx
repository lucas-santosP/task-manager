import React, { useEffect, useMemo, useRef, useState } from "react";
import { DraggableWrapper } from "./styles";

interface IProps {
  dataTransfer: { key: string; data: string };
  elementId: string;
}

const Draggable: React.FC<IProps> = (props) => {
  const { dataTransfer, elementId } = props;

  const [isDragging, setIsDragging] = useState(false);
  const refDraggableWrapper = useRef<HTMLDivElement>(null);

  function handleOnDragStart(e: React.DragEvent<HTMLDivElement>) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData(dataTransfer.key, dataTransfer.data);

    const targetDraggingEl = document.querySelector(`#${elementId}`);
    if (targetDraggingEl) e.dataTransfer.setDragImage(targetDraggingEl, 0, 0);
  }

  function addDropZoneHighLight(dropZonesElements: NodeListOf<Element>) {
    for (const el of dropZonesElements) {
      el.querySelector("ul")?.setAttribute(
        "style",
        "outline-offset: 6px; outline: dashed 2px #74cce9;"
      );
    }
  }

  function removeDropZoneHighLight(dropZonesElements: NodeListOf<Element>) {
    for (const el of dropZonesElements) {
      el.querySelector("ul")?.setAttribute("style", "outline none;");
    }
  }

  const listeners = useMemo(
    () => ({
      onDragStart() {
        setIsDragging(true);
        const targetDraggingEl = document.querySelector(`#${elementId}`);
        if (targetDraggingEl) targetDraggingEl.setAttribute("style", "opacity: 0.5;");
      },
      onDragEnd() {
        setIsDragging(false);
        const targetDraggingEl = document.querySelector(`#${elementId}`);
        if (targetDraggingEl) targetDraggingEl.removeAttribute("style");
      },
    }),
    []
  );

  useEffect(() => {
    const targetDraggingEl = document.querySelector(`#${elementId}`);
    const dropZonesElements = document.querySelectorAll(".drop-zone");

    if (isDragging) {
      targetDraggingEl?.classList.add("is-dragging");
      addDropZoneHighLight(dropZonesElements);
    } else {
      targetDraggingEl?.classList.remove("is-dragging");
      removeDropZoneHighLight(dropZonesElements);
    }

    () => {
      targetDraggingEl?.classList.remove("is-dragging");
      removeDropZoneHighLight(dropZonesElements);
    };
  }, [isDragging]);

  useEffect(() => {
    refDraggableWrapper.current?.addEventListener("dragstart", listeners.onDragStart);
    refDraggableWrapper.current?.addEventListener("dragend", listeners.onDragEnd);

    () => {
      refDraggableWrapper.current?.removeEventListener("dragstart", listeners.onDragStart);
      refDraggableWrapper.current?.removeEventListener("dragend", listeners.onDragEnd);
    };
  }, []);

  return (
    <DraggableWrapper
      ref={refDraggableWrapper}
      draggable
      onDragStart={handleOnDragStart}
      onDragOver={(e) => {
        e.dataTransfer.dropEffect = "move";
        e.preventDefault();
      }}
    >
      <svg
        className="icon"
        width="100%"
        height="100%"
        viewBox="0 0 175 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <circle cx="32" cy="28" r="28" fill="currentColor" />
          <circle cx="32" cy="131" r="28" fill="currentColor" />
          <circle cx="32" cy="234" r="28" fill="currentColor" />
          <circle cx="143" cy="28" r="28" fill="currentColor" />
          <circle cx="143" cy="131" r="28" fill="currentColor" />
          <circle cx="143" cy="234" r="28" fill="currentColor" />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="175"
            height="270"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    </DraggableWrapper>
  );
};

export default Draggable;
