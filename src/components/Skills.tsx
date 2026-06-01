"use client";

import React from 'react';
import {
  SiTypescript, SiJavascript, SiPython, SiPhp, SiKotlin,
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiLaravel,
  SiUnity, SiBlender, SiGit, SiGithub, SiFirebase, SiExpo, SiVercel, SiSupabase, SiMui,
  SiOpenai, SiHuggingface, SiGoogle
} from 'react-icons/si';
import { FaJava, FaCode, FaCube, FaGamepad, FaRobot } from 'react-icons/fa';

const LivewireIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em" {...props}>
    <path fill="currentColor" d="M12.001 0C6.174 0 1.448 4.957 1.448 11.072c0 2.09.552 4.042 1.51 5.71c.25.279.544.484.965.484c1.339 0 1.268-2.065 2.607-2.065s1.411 2.065 2.75 2.065c1.34 0 1.266-2.065 2.606-2.065c.584 0 .928.397 1.24.84c-.221-.205-.48-.348-.82-.348c-1.196 0-1.307 1.678-2.201 2.141v4.51a1.657 1.657 0 0 0 3.312 0V16.45c.308.433.647.815 1.22.815c1.34 0 1.267-2.065 2.606-2.065c.465 0 .774.255 1.04.58a1.1 1.1 0 0 0-.43-.088c-1.159 0-1.297 1.574-2.118 2.094v2.436a1.49 1.49 0 0 0 2.98 0V16.37c.324.466.67.895 1.278.895c.796 0 1.093-.73 1.485-1.32a11.5 11.5 0 0 0 1.074-4.874C22.552 4.957 17.828 0 12 0m-.566 2.877c2.88 0 5.214 2.784 5.214 5.807s-1.545 5.15-5.214 5.15s-5.215-2.127-5.215-5.15s2.335-5.807 5.215-5.807m-1.403 1.66a1.955 2.158 0 0 0-1.955 2.158a1.955 2.158 0 0 0 1.955 2.158a1.955 2.158 0 0 0 1.955-2.158a1.955 2.158 0 0 0-1.955-2.158m-.326.664a.978.996 0 0 1 .979.996a.978.996 0 0 1-.979.996a.978.996 0 0 1-.977-.996a.978.996 0 0 1 .977-.996m-2.95 10.493c-1.074 0-1.272 1.354-1.95 1.964v1.782a1.49 1.49 0 0 0 2.98 0v-3.182c-.264-.324-.577-.564-1.03-.564"></path>
  </svg>
);

const CursorIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em" {...props}>
    <path fill="currentColor" fillRule="evenodd" d="M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z"></path>
  </svg>
);

const GeminiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em" {...props}>
    <title>Gemini</title>
    <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="#3186FF" />
    <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="url(#lobe-icons-gemini-0-_R_0_)" />
    <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="url(#lobe-icons-gemini-1-_R_0_)" />
    <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="url(#lobe-icons-gemini-2-_R_0_)" />
    <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-gemini-0-_R_0_" x1="7" x2="11" y1="15.5" y2="12">
        <stop stopColor="#08B962" />
        <stop offset="1" stopColor="#08B962" stopOpacity="0" />
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-gemini-1-_R_0_" x1="8" x2="11.5" y1="5.5" y2="11">
        <stop stopColor="#F94543" />
        <stop offset="1" stopColor="#F94543" stopOpacity="0" />
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-gemini-2-_R_0_" x1="3.5" x2="17.5" y1="13.5" y2="12">
        <stop stopColor="#FABC12" />
        <stop offset=".46" stopColor="#FABC12" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const ClaudeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em" {...props}>
    <title>Claude</title>
    <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" fill="#D97757" fillRule="nonzero"></path>
  </svg>
);

const AntigravityIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em" {...props}>
    <title>Antigravity</title>
    <mask height="23" id="lobe-icons-antigravity-0-_R_0_" maskUnits="userSpaceOnUse" width="24" x="0" y="1">
      <path d="M21.751 22.607c1.34 1.005 3.35.335 1.508-1.508C17.73 15.74 18.904 1 12.037 1 5.17 1 6.342 15.74.815 21.1c-2.01 2.009.167 2.511 1.507 1.506 5.192-3.517 4.857-9.714 9.715-9.714 4.857 0 4.522 6.197 9.714 9.715z" fill="#fff" />
    </mask>
    <g mask="url(#lobe-icons-antigravity-0-_R_0_)">
      <g filter="url(#lobe-icons-antigravity-1-_R_0_)">
        <path d="M-1.018-3.992c-.408 3.591 2.686 6.89 6.91 7.37 4.225.48 7.98-2.043 8.387-5.633.408-3.59-2.686-6.89-6.91-7.37-4.225-.479-7.98 2.043-8.387 5.633z" fill="#FFE432" />
      </g>
      <g filter="url(#lobe-icons-antigravity-2-_R_0_)">
        <path d="M15.269 7.747c1.058 4.557 5.691 7.374 10.348 6.293 4.657-1.082 7.575-5.653 6.516-10.21-1.058-4.556-5.691-7.374-10.348-6.292-4.657 1.082-7.575-5.653-6.516 10.21z" fill="#FC413D" />
      </g>
      <g filter="url(#lobe-icons-antigravity-3-_R_0_)">
        <path d="M-12.443 10.804c1.338 4.703 7.36 7.11 13.453 5.378 6.092-1.733 9.947-6.95 8.61-11.652C8.282-.173 2.26-2.58-3.833-.848-9.925.884-13.78 6.1-12.443 10.804z" fill="#00B95C" />
      </g>
      <g filter="url(#lobe-icons-antigravity-4-_R_0_)">
        <path d="M-12.443 10.804c1.338 4.703 7.36 7.11 13.453 5.378 6.092-1.733 9.947-6.95 8.61-11.652C8.282-.173 2.26-2.58-3.833-.848-9.925.884-13.78 6.1-12.443 10.804z" fill="#00B95C" />
      </g>
      <g filter="url(#lobe-icons-antigravity-5-_R_0_)">
        <path d="M-7.608 14.703c3.352 3.424 9.126 3.208 12.896-.483 3.77-3.69 4.108-9.459.756-12.883C2.69-2.087-3.083-1.871-6.853 1.82c-3.77 3.69-4.108 9.458-.755 12.883z" fill="#00B95C" />
      </g>
      <g filter="url(#lobe-icons-antigravity-6-_R_0_)">
        <path d="M9.932 27.617c1.04 4.482 5.384 7.303 9.7 6.3 4.316-1.002 6.971-5.448 5.93-9.93-1.04-4.483-5.384-7.304-9.7-6.301-4.316 1.002-6.971 5.448-5.93 9.93z" fill="#3186FF" />
      </g>
      <g filter="url(#lobe-icons-antigravity-7-_R_0_)">
        <path d="M2.572-8.185C.392-3.329 2.778 2.472 7.9 4.771c5.122 2.3 11.042.227 13.222-4.63 2.18-4.855-.205-10.656-5.327-12.955-5.122-2.3-11.042-.227-13.222 4.63z" fill="#FBBC04" />
      </g>
      <g filter="url(#lobe-icons-antigravity-8-_R_0_)">
        <path d="M-3.267 38.686c-5.277-2.072 3.742-19.117 5.984-24.83 2.243-5.712 8.34-8.664 13.616-6.592 5.278 2.071 11.533 13.482 9.29 19.195-2.242 5.713-23.613 14.298-28.89 12.227z" fill="#3186FF" />
      </g>
      <g filter="url(#lobe-icons-antigravity-9-_R_0_)">
        <path d="M28.71 17.471c-1.413 1.649-5.1.808-8.236-1.878-3.135-2.687-4.531-6.201-3.118-7.85 1.412-1.649 5.1-.808 8.235 1.878s4.532 6.2 3.119 7.85z" fill="#749BFF" />
      </g>
      <g filter="url(#lobe-icons-antigravity-10-_R_0_)">
        <path d="M18.163 9.077c5.81 3.93 12.502 4.19 14.946.577 2.443-3.612-.287-9.727-6.098-13.658-5.81-3.931-12.502-4.19-14.946-.577-2.443 3.612.287 9.727 6.098 13.658z" fill="#FC413D" />
      </g>
      <g filter="url(#lobe-icons-antigravity-11-_R_0_)">
        <path d="M-.915 2.684c-1.44 3.473-.97 6.967 1.05 7.804 2.02.837 4.824-1.3 6.264-4.772 1.44-3.473.97-6.967-1.05-7.804-2.02-.837-4.824 1.3-6.264 4.772z" fill="#FFEE48" />
      </g>
    </g>
    <defs>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="17.587" id="lobe-icons-antigravity-1-_R_0_" width="19.838" x="-3.288" y="-11.917">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="1.117" />
      </filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.565" id="lobe-icons-antigravity-2-_R_0_" width="38.9" x="4.251" y="-13.493">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="5.4" />
      </filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36.517" id="lobe-icons-antigravity-3-_R_0_" width="40.955" x="-21.889" y="-10.592">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="4.591" />
      </filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36.517" id="lobe-icons-antigravity-4-_R_0_" width="40.955" x="-21.889" y="-10.592">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="4.591" />
      </filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36.595" id="lobe-icons-antigravity-5-_R_0_" width="36.632" x="-19.099" y="-10.278">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="4.591" />
      </filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="34.087" id="lobe-icons-antigravity-6-_R_0_" width="33.533" x=".981" y="8.758">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="4.363" />
      </filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="35.276" id="lobe-icons-antigravity-7-_R_0_" width="35.978" x="-6.143" y="-21.659">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="3.954" />
      </filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.523" id="lobe-icons-antigravity-8-_R_0_" width="45.114" x="-11.96" y="-.46">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="3.531" />
      </filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24.054" id="lobe-icons-antigravity-9-_R_0_" width="25.094" x="10.485" y=".58">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="3.159" />
      </filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30.007" id="lobe-icons-antigravity-10-_R_0_" width="33.508" x="5.833" y="-12.467">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="2.669" />
      </filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26.151" id="lobe-icons-antigravity-11-_R_0_" width="22.194" x="-8.355" y="-8.876">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="3.303" />
      </filter>
    </defs>
  </svg>
);

const ThreeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 226.77 226.77" fill="none" strokeLinecap="square" strokeMiterlimit="10" width="1.2em" height="1.2em" {...props}>
    <g transform="translate(8.964 4.2527)" fillRule="evenodd" stroke="currentColor" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="4">
      <path d="m63.02 200.61-43.213-174.94 173.23 49.874z" />
      <path d="m106.39 50.612 21.591 87.496-86.567-24.945z" />
      <path d="m84.91 125.03-10.724-43.465 43.008 12.346z" />
      <path d="m63.458 38.153 10.724 43.465-43.008-12.346z" />
      <path d="m149.47 62.93 10.724 43.465-43.008-12.346z" />
      <path d="m84.915 125.06 10.724 43.465-43.008-12.346z" />
    </g>
  </svg>
);

const CSharpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" width="1.4em" height="1.4em" {...props}>
    <path d="M27.6947 22.9999C27.883 22.6617 28 22.2807 28 21.9385V10.0613C28 9.71913 27.8831 9.33818 27.6947 9L16 16L27.6947 22.9999Z" fill="#7F3A86" />
    <path d="M17.0395 29.7433L26.9611 23.8047C27.2469 23.6336 27.5067 23.3382 27.695 23L16.0003 16L4.30566 23C4.49398 23.3382 4.75382 23.6337 5.03955 23.8047L14.9611 29.7433C15.5326 30.0855 16.468 30.0855 17.0395 29.7433Z" fill="#662579" />
    <path d="M27.6947 8.99996C27.5064 8.6617 27.2465 8.36629 26.9608 8.19521L17.0392 2.25662C16.4677 1.91446 15.5323 1.91446 14.9608 2.25662L5.03922 8.19521C4.46761 8.53729 4 9.37709 4 10.0613V21.9386C4 22.2807 4.11694 22.6618 4.30533 23L16 16L27.6947 8.99996Z" fill="#9A5196" />
    <path d="M16.0385 24C11.6061 24 8 20.4112 8 16C8 11.5888 11.6061 8 16.0385 8C18.8458 8 21.4674 9.47569 22.919 11.8618L19.4765 13.9265C18.7492 12.736 17.4399 12 16.0385 12C13.8222 12 12.0193 13.7944 12.0193 16C12.0193 18.2056 13.8222 20 16.0385 20C17.4362 20 18.7421 19.2681 19.4707 18.0832L22.9205 20.1359C21.4692 22.5234 18.8467 24 16.0385 24Z" fill="white" />
    <path fillRule="evenodd" clipRule="evenodd" d="M25.0001 13V13.9974H22.9999V13H22.0001V13.9974H21V15H22.0001V16.9948H21V18H22.0001V19H22.9999L23 18H25.0001V19H25.9999V18H27V17H25.9999V15H27V13.9974H25.9999V13H25.0001ZM25.0001 17V15H22.9999V16.9948L25.0001 17Z" fill="white" />
  </svg>
);

const WebGLIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1.8em" height="1.8em" {...props}>
    <title>WebGL icon</title>
    <path d="M18.928 14.179c-.214.09-.427.135-.643.135-.342 0-.65-.059-.923-.178a1.963 1.963 0 0 1-.69-.491c-.187-.209-.332-.453-.432-.735s-.149-.586-.149-.911c0-.335.05-.643.149-.93.1-.287.242-.536.429-.747a1.96 1.96 0 0 1 .69-.501 2.25 2.25 0 0 1 .923-.183c.23 0 .451.036.664.104.214.069.408.171.581.304s.316.299.427.496a1.7 1.7 0 0 1 .206.676h-.935c-.059-.249-.171-.437-.337-.562a.973.973 0 0 0-.607-.187c-.221 0-.408.043-.562.128s-.28.199-.375.344c-.095.145-.166.308-.209.491s-.066.372-.066.569c0 .187.021.37.066.548.043.178.114.337.209.479.095.142.221.256.375.342s.342.128.562.128c.325 0 .577-.083.754-.247.178-.164.28-.401.311-.714h-.987V11.8h1.872v2.413h-.624l-.1-.505a1.444 1.444 0 0 1-.579.471zm2.896-4.429v3.632H24v.828h-3.155V9.75h.979zM2.785 11.999c0-.709.343-1.376.948-1.962l1.109 4.221h.764l1.075-3.815 1.06 3.815h.766l1.321-4.856h-.86l-.861 3.725-1.039-3.726H6.28l-1.039 3.725-.84-3.632c1.489-1.025 3.868-1.69 6.548-1.69 2.512 0 4.764.529 6.261 1.445-1.632-1.535-4.565-2.612-7.915-2.614C4.161 6.635 0 9.036 0 11.999s4.161 5.367 9.293 5.367c3.338 0 6.261-1.075 7.9-2.6-1.497.911-3.741 1.428-6.244 1.428-4.51-.001-8.164-1.877-8.164-4.195zm9.194-.553a1.184 1.184 0 0 0-.444-.384 1.378 1.378 0 0 0-.622-.135c-.261 0-.496.047-.7.14a1.313 1.313 0 0 0-.489.387c-.244.311-.372.75-.372 1.269 0 .23.033.448.097.643a1.5 1.5 0 0 0 .285.515c.261.304.633.465 1.077.465.233 0 .422-.024.581-.074.138-.043.23-.1.306-.149a1.357 1.357 0 0 0 .444-.489c.09-.166.135-.323.145-.403l.007-.055h-.633l-.002.045c-.017.206-.287.574-.769.574-.688 0-.852-.498-.864-.937h2.306v-.05a3.15 3.15 0 0 0-.085-.766 1.84 1.84 0 0 0-.268-.596zm-1.139.05c.51 0 .783.275.833.84h-1.651c.025-.458.388-.84.818-.84zm4.678.415a1.575 1.575 0 0 0-.268-.515 1.25 1.25 0 0 0-.437-.346 1.36 1.36 0 0 0-.586-.126 1.141 1.141 0 0 0-.531.128 1.1 1.1 0 0 0-.346.28v-1.49h-.631v4.413h.6v-.301a.964.964 0 0 0 .211.206c.171.123.382.185.626.185.263 0 .501-.059.7-.176.178-.104.33-.254.448-.444a1.93 1.93 0 0 0 .235-.584 2.66 2.66 0 0 0 .069-.603 1.986 1.986 0 0 0-.09-.627zm-.567.717c0 .346-.069.636-.202.84a.682.682 0 0 1-.605.325c-.377 0-.819-.263-.819-1.008 0-.356.045-.631.135-.84.13-.301.351-.446.671-.446.342 0 .572.133.7.41.106.227.12.505.12.719z" />
  </svg>
);

const PhaserIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { style, className, ...rest } = props as any;
  return (
    <img
      src="/assets/svg%20icons/phaserio-ar21.svg"
      alt="Phaser"
      style={{ ...style, width: '2.3em', height: '1.5em', marginRight: '-0.7em', marginLeft: '-0.6em' }}
      className={`object-contain ${className || ''}`}
      {...rest}
    />
  );
};

const GsapIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { style, className, ...rest } = props as any;
  return (
    <img
      src="/assets/svg%20icons/greensock-gsap-icon-seeklogo.svg"
      alt="GSAP"
      style={{ ...style, width: '1.2em', height: '1.2em' }}
      className={`object-contain ${className || ''}`}
      {...rest}
    />
  );
};

const GodotIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 1024 1024" width="1.2em" height="1.2em" {...props}>
    <path d="m0 0s-.325 1.994-.515 1.976l-36.182-3.491c-2.879-.278-5.115-2.574-5.317-5.459l-.994-14.247L-71-23.218l-1.904 12.912c-.424 2.872-2.932 5.037-5.835 5.037h-38.188c-2.902.0-5.41-2.165-5.834-5.037l-1.905-12.912-27.992 1.997-.994 14.247c-.202 2.886-2.438 5.182-5.317 5.46l-36.2 3.49c-.187.018-.324-1.978-.511-1.978l-.049-7.83 30.658-4.944 1.004-14.374c.203-2.91 2.551-5.263 5.463-5.472l38.551-2.75c.146-.01.29-.016.434-.016 2.897.0 5.401 2.166 5.825 5.038l1.959 13.286h28.005l1.959-13.286c.423-2.871 2.93-5.037 5.831-5.037.142.0.284.005.423.015l38.556 2.75c2.911.209 5.26 2.562 5.463 5.472l1.003 14.374 30.645 4.966z" fill="#fff" transform="matrix(4.162611 0 0 -4.162611 919.24059 673.152141)" />
    <path d="m0 0v-47.514-6.035-5.492c.108-.001.216-.005.323-.015l36.196-3.49c1.896-.183 3.382-1.709 3.514-3.609l1.116-15.978 31.574-2.253 2.175 14.747c.282 1.912 1.922 3.329 3.856 3.329h38.188c1.933.0 3.573-1.417 3.855-3.329l2.175-14.747 31.575 2.253 1.115 15.978c.133 1.9 1.618 3.425 3.514 3.609l36.182 3.49c.107.01.214.014.322.015v4.711l.015.005v54.325c5.09692 6.4164715 9.92323 13.494208 13.621 19.449-5.651 9.62-12.575 18.217-19.976 26.182-6.864-3.455-13.531-7.369-19.828-11.534-3.151 3.132-6.7 5.694-10.186 8.372-3.425 2.751-7.285 4.768-10.946 7.118 1.09 8.117 1.629 16.108 1.846 24.448-9.446 4.754-19.519 7.906-29.708 10.17-4.068-6.837-7.788-14.241-11.028-21.479-3.842.642-7.702.88-11.567.926v.006c-.027.0-.052-.006-.075-.006-.024.0-.049.006-.073.006v-.006c-3.872-.046-7.729-.284-11.572-.926-3.238 7.238-6.956 14.642-11.03 21.479-10.184-2.264-20.258-5.416-29.703-10.17.216-8.34.755-16.331 1.848-24.448-3.668-2.35-7.523-4.367-10.949-7.118-3.481-2.678-7.036-5.24-10.188-8.372-6.297 4.165-12.962 8.079-19.828 11.534-7.401-7.965-14.321-16.562-19.974-26.182 4.4426579-6.973692 9.2079702-13.9828876 13.621-19.449z" fill="#478cbf" transform="matrix(4.162611 0 0 -4.162611 104.69892 427.387251)" />
    <path d="m0 0-1.121-16.063c-.135-1.936-1.675-3.477-3.611-3.616l-38.555-2.751c-.094-.007-.188-.01-.281-.01-1.916.0-3.569 1.406-3.852 3.33l-2.211 14.994H-81.09l-2.211-14.994c-.297-2.018-2.101-3.469-4.133-3.32l-38.555 2.751c-1.936.139-3.476 1.68-3.611 3.616L-130.721.0l-32.547 3.138c.015-3.498.06-7.33.06-8.093.0-34.374 43.605-50.896 97.781-51.086h.066.067c54.176.19 97.766 16.712 97.766 51.086.0.777.047 4.593.063 8.093z" fill="#478cbf" transform="matrix(4.162611 0 0 -4.162611 784.07144 718.723121)" />
    <path d="m0 0c0-12.052-9.765-21.815-21.813-21.815-12.042.0-21.81 9.763-21.81 21.815.0 12.044 9.768 21.802 21.81 21.802C-9.765 21.802.0 12.044.0.0" fill="#fff" transform="matrix(4.162611 0 0 -4.162611 389.21484 527.151321)" />
    <path d="m0 0c0-7.994-6.479-14.473-14.479-14.473-7.996.0-14.479 6.479-14.479 14.473s6.483 14.479 14.479 14.479C-6.479 14.479.0 7.994.0.0" fill="#414042" transform="matrix(4.162611 0 0 -4.162611 367.36686 532.537071)" />
    <path d="m0 0c-3.878.0-7.021 2.858-7.021 6.381v20.081c0 3.52 3.143 6.381 7.021 6.381s7.028-2.861 7.028-6.381V6.381c0-3.523-3.15-6.381-7.028-6.381" fill="#fff" transform="matrix(4.162611 0 0 -4.162611 511.99336 626.219821)" />
    <path d="m0 0c0-12.052 9.765-21.815 21.815-21.815 12.041.0 21.808 9.763 21.808 21.815.0 12.044-9.767 21.802-21.808 21.802-12.05.0-21.815-9.758-21.815-21.802" fill="#fff" transform="matrix(4.162611 0 0 -4.162611 634.78706 527.151321)" />
    <path d="m0 0c0-7.994 6.477-14.473 14.471-14.473C22.473-14.473 28.95-7.994 28.95.0s-6.477 14.479-14.479 14.479C6.477 14.479.0 7.994.0.0" fill="#414042" transform="matrix(4.162611 0 0 -4.162611 656.64056 532.537071)" />
  </svg>
);

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C#", icon: CSharpIcon, color: "#FFFFFF" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    ]
  },
  {
    category: "Frontend & Web",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "MUI", icon: SiMui, color: "#007FFF" },
      { name: "GSAP", icon: GsapIcon, color: "#88CE02" },
      { name: "Three.js", icon: ThreeIcon, color: "#FFFFFF" },
      { name: "WebGL", icon: WebGLIcon, color: "#FFFFFF" },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Livewire", icon: LivewireIcon, color: "#FB70A9" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    ]
  },
  {
    category: "Mobile",
    skills: [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Expo", icon: SiExpo, color: "#FFFFFF" },
      { name: "NativeWind", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    category: "Game Development",
    skills: [
      { name: "Phaser", icon: PhaserIcon, color: "#FFFFFF" },
      { name: "Unity", icon: SiUnity, color: "#FFFFFF" },
      { name: "Godot", icon: GodotIcon, color: "#FFFFFF" },
    ]
  },
  {
    category: "3D & Graphics",
    skills: [
      { name: "Blender", icon: SiBlender, color: "#F5792A" },
      { name: "WebGL", icon: WebGLIcon, color: "#FFFFFF" },
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "GitHub Desktop", icon: SiGithub, color: "#FFFFFF" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    ]
  },
  {
    category: "AI Developer Tools",
    skills: [
      { name: "ChatGPT", icon: SiOpenai, color: "#10A37F" },
      { name: "Gemini", icon: GeminiIcon, color: "#FFFFFF" },
      { name: "Claude", icon: ClaudeIcon, color: "#FFFFFF" },
      { name: "Cursor", icon: CursorIcon, color: "#FFFFFF" },
      { name: "Antigravity", icon: AntigravityIcon, color: "#FFFFFF" },
      { name: "huggingface", icon: SiHuggingface, color: "#FFD21E" },
    ]
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 pt-[100px] pb-24 px-6 max-w-7xl mx-auto scroll-mt-0">
      <div className="mb-10">
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-playfair tracking-tighter uppercase wrap-break-word">SKILLS</h2>
      </div>

      <div className="flex flex-col border-t border-white/5">
        {skillsData.map((item) => (
          <div key={item.category} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-6 border-b border-white/5 items-start hover:bg-white/1 transition-colors">
            <h3 className="text-xs font-mono text-white uppercase tracking-widest pt-1.5">{item.category}</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {item.skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2 group">
                  <skill.icon className="text-xl shrink-0" style={{ color: skill.color }} />
                  <span className="text-lg font-bold text-white transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
