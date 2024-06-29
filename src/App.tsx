import { useEffect, useState } from "react";
import Screen from "./Screen";

import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(RelativeTime);
const weddingDate = new Date("2024-10-19");
weddingDate.setHours(15);
weddingDate.setMinutes(0);
weddingDate.setDate(19);
function getTimeData() {
  const millisLeft = dayjs(weddingDate).diff(dayjs());
  const days = Math.floor(millisLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (millisLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.ceil((millisLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((millisLeft % (1000 * 60)) / 1000);
  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
function App() {
  const [fecha, setFecha] = useState(getTimeData());
  useEffect(() => {
    const interval = setInterval(() => {
      setFecha(getTimeData());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="h-dvh snap-y snap-mandatory bg-orange-100 scroll-smooth w-full overflow-auto">
      <Screen>
        <div className="flex-1 ">
          <img
            src="/pruebita.jpg"
            className="object-cover h-full w-full flex-1 rounded-b-2xl  object-center"
          />
        </div>
        <div className="h-[15%] text-5xl text-gray-400 flex bg-transparent items-center justify-center iniciales">
          {"K&B"}
        </div>
      </Screen>
      <Screen>
        <div className="flex flex-col justify-center gap-10 text-center h-full w-full">
          <span className="text-xl mb-6">Nos Casamos!</span>
          <div className="px-16 ">
            <h1 className="iniciales leading-[80%] text-left text-7xl">Kari</h1>
            <h1 className="iniciales leading-[80%] text-center text-7xl">&</h1>
            <h1 className="iniciales leading-[80%] pr-4 text-right text-7xl">
              Bri
            </h1>
          </div>
          <p className="px-8 mt-4 text-lg">
            "Hay momentos en la vida que son muy especiales por si solos, Pero
            al compartirlo con personas tan especiales como tu se convierten en
            momentos imposibles de olvidar."
          </p>
        </div>
      </Screen>
      <Screen>
        <div className="tracking-wider flex relative pt-24  mx-auto text-center gap-4 items-center h-min">
          <div className="border-t w-24 uppercase border-t-gray-500 border-b-gray-500 border-b">
            Sabado
          </div>
          <div className="text-6xl font-medium font-sans ">23</div>

          <div className="border-t w-24 uppercase border-t-gray-500 border-b-gray-500 border-b">
            Septiembre
          </div>
        </div>
        <div className="px-12 py-12">
          <div className="border mt-12 border-gray-500 relative  flex items-center justify-evenly py-4 text-2xl">
            <div className="absolute top-[-45%] px-4 text-center  p-4 bg-orange-100">
              Faltan
            </div>
            <span className="text-center">
              <div>{fecha.days}</div>
              <div className="text-base ">Dias</div>
            </span>
            <span className="text-center">
              <div>{fecha.hours}</div>
              <div className="text-base ">Horas</div>
            </span>
            <span className="text-center">
              <div>{fecha.minutes}</div>
              <div className="text-base ">Minutos</div>
            </span>
          </div>
          <div className=" mx-auto text-center flex flex-col gap-1 mt-24">
            <p className="tracking-widest uppercase">Condominio La Serena</p>
            <p className="font-semibold tracking-widest">HORA: 15:00 PM</p>
            <p className="">Como Llegar?</p>
            <a
              target="_blank"
              href="https://maps.app.goo.gl/AFWjddBxTurpUdgdA"
              className="border-2 mx-auto rounded-lg py-2 w-max px-6 mt-2 text-emerald-800 font-medium border-emerald-800 block"
            >
              MAPA
            </a>
          </div>
          <div className="mt-14 flex-col flex">
            <div className="tracking-widest font-medium text-center mb-2 mx-auto">
              Vestimenta
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 80"
              x="0px"
              y="0px"
              className="w-12 mx-auto "
              stroke="black"
            >
              <path d="M35.93,25.63l-5.45-13.63c-.46-1.14-1.43-2.02-2.62-2.36l-5.58-1.6s-.02,0-.03,0c0,0-.01,0-.02,0-.02,0-.03,0-.05,0-.06-.01-.11-.02-.17-.02h-6c-.06,0-.11,.01-.17,.02-.02,0-.03,0-.05,0,0,0-.01,0-.02,0,0,0-.02,0-.03,0l-5.58,1.6c-1.18,.34-2.16,1.22-2.62,2.36L2.07,25.63c-.19,.48,.02,1.03,.48,1.27l4,2c.49,.25,1.09,.05,1.34-.45l2.11-4.21v8.72l-2,21.96c-.03,.28,.07,.56,.26,.76s.46,.33,.74,.33h6c.47,0,.87-.33,.98-.78l3.02-13.61,3.02,13.61c.1,.46,.51,.78,.98,.78h6c.28,0,.55-.12,.74-.33s.28-.48,.26-.76l-2-21.96v-8.72l2.11,4.21c.25,.49,.85,.69,1.34,.45l4-2c.46-.23,.67-.78,.48-1.27Zm-16.93-8.08l-1.74-7.55h3.49l-1.74,7.55Zm-4.07-3.92l-1.18-2.95,1.51-.43,1.98,8.58-2.24-2.24v-2.59c0-.13-.02-.25-.07-.37Zm7.81-3.38l1.51,.43-1.18,2.95c-.05,.12-.07,.24-.07,.37v2.59l-2.24,2.24,1.98-8.58Zm1.06,43.75l-3.83-17.22c-.01-.05-.04-.09-.06-.14-.03-.07-.05-.14-.09-.2-.04-.06-.09-.1-.13-.14-.04-.04-.08-.09-.14-.13-.06-.04-.13-.06-.2-.09-.05-.02-.09-.05-.14-.06,0,0-.01,0-.02,0-.07-.01-.13,0-.2,0-.06,0-.13,0-.19,0,0,0-.02,0-.02,0-.06,.01-.11,.05-.17,.07-.06,.02-.12,.04-.17,.07-.06,.04-.11,.09-.15,.15-.04,.04-.09,.08-.12,.13-.04,.06-.06,.14-.09,.21-.02,.05-.05,.08-.06,.13l-3.83,17.22h-4.1l1.82-20h5.09c.27,0,.52-.11,.71-.29l1.29-1.29,1.29,1.29c.19,.19,.44,.29,.71,.29h5.09l1.82,20h-4.1Zm7.65-27.34l-3.55-7.11c-.21-.42-.68-.63-1.12-.53-.45,.11-.77,.51-.77,.97v12h-4.59l-1.71-1.71c-.39-.39-1.02-.39-1.41,0l-1.71,1.71h-4.59v-12c0-.46-.32-.87-.77-.97-.45-.11-.92,.11-1.12,.53l-3.55,7.11-2.28-1.14,5.11-12.78c.23-.57,.72-1.01,1.31-1.18l1.13-.32,1.18,2.96v2.81c0,.27,.11,.52,.29,.71l5,5s.05,.03,.07,.04c.05,.04,.1,.09,.16,.12,.02,.01,.05,.02,.07,.03,.03,.01,.05,.02,.08,.03,.11,.04,.22,.07,.33,.07s.23-.03,.33-.07c.03,0,.05-.02,.08-.03,.02-.01,.05-.02,.07-.03,.06-.03,.1-.08,.16-.12,.02-.02,.05-.03,.07-.04l5-5c.19-.19,.29-.44,.29-.71v-2.81l1.18-2.96,1.13,.32c.59,.17,1.08,.61,1.31,1.18l5.11,12.78-2.28,1.14Z" />
              <path d="M61.83,51.52c.03-.05,.07-.11,.09-.17,.02-.06,.03-.12,.05-.19,.01-.06,.02-.12,.02-.19,0-.07-.02-.13-.03-.2,0-.04,0-.08-.02-.13l-3.26-8.97h0l-4.68-12.86v-3.63l1.25-3.12c.5-1.25,.75-2.56,.75-3.9,0-.86-.11-1.71-.31-2.55l-.72-2.87c-.11-.45-.51-.76-.97-.76h-1v-3c0-.55-.45-1-1-1s-1,.45-1,1v3.12c-1.54,.27-2.95,1.04-4,2.22-1.05-1.17-2.46-1.95-4-2.22v-3.12c0-.55-.45-1-1-1s-1,.45-1,1v3h-1c-.46,0-.86,.31-.97,.76l-.72,2.86c-.21,.83-.31,1.69-.31,2.55,0,1.34,.25,2.66,.75,3.9l1.25,3.12v3.63l-4.68,12.86h0l-3.26,8.98s0,.08-.02,.13c-.02,.07-.03,.13-.03,.2,0,.06,0,.12,.02,.19,.01,.06,.02,.12,.05,.19,.02,.06,.06,.11,.09,.17,.03,.05,.07,.11,.11,.15,.05,.05,.1,.09,.15,.13,.04,.03,.06,.06,.1,.08,.03,.02,.07,.03,.1,.04,0,0,.01,.01,.02,.01,0,0,.01,0,.02,0,.57,.28,1.19,.45,1.79,.6,.52,.13,1,.26,1.39,.44,.37,.17,.73,.44,1.11,.72,.58,.44,1.25,.93,2.11,1.18,.83,.24,1.68,.21,2.51,.19,.55-.02,1.07-.04,1.54,.03,.44,.06,.9,.21,1.39,.38,.74,.24,1.57,.52,2.48,.52s1.75-.28,2.48-.52c.49-.16,.96-.32,1.39-.38,.46-.06,.98-.05,1.54-.03,.83,.03,1.68,.06,2.51-.19,.86-.25,1.52-.75,2.11-1.18,.38-.28,.74-.55,1.11-.72,.38-.18,.87-.3,1.39-.44,.61-.15,1.23-.33,1.8-.6,0,0,.01,0,.02,0,0,0,.01-.01,.02-.01,.03-.02,.07-.02,.1-.04,.04-.02,.06-.06,.1-.08,.06-.04,.11-.08,.15-.13,.04-.05,.08-.1,.11-.15Zm-25.06-7.96c.07,.05,.14,.1,.21,.15,.58,.44,1.25,.93,2.11,1.18,.82,.24,1.67,.21,2.49,.18,.55-.02,1.08-.04,1.54,.03,.44,.06,.9,.22,1.39,.38,.74,.25,1.58,.52,2.49,.52s1.75-.28,2.49-.52c.49-.16,.95-.31,1.39-.38,.46-.07,.99-.05,1.54-.03,.82,.03,1.67,.06,2.5-.18,.86-.25,1.52-.75,2.11-1.18,.07-.05,.14-.1,.21-.15l.84,2.31c-.27,.08-.53,.18-.78,.3-.56,.26-1.02,.6-1.46,.93-.49,.37-.96,.71-1.46,.86-.52,.15-1.18,.13-1.87,.1-.62-.02-1.25-.04-1.89,.05-.61,.09-1.18,.28-1.73,.46-.66,.22-1.28,.42-1.87,.42s-1.21-.2-1.87-.42c-.55-.18-1.12-.37-1.73-.46-.64-.09-1.27-.07-1.89-.05-.7,.02-1.36,.05-1.87-.1-.51-.15-.98-.5-1.47-.86-.44-.33-.9-.68-1.45-.93-.26-.12-.52-.22-.79-.31l.84-2.31Zm19.75-1.95c-.24,.16-.47,.33-.69,.5-.49,.37-.96,.71-1.46,.86-.52,.15-1.18,.13-1.87,.1-.62-.02-1.25-.04-1.89,.05-.61,.09-1.18,.28-1.73,.46-.66,.22-1.28,.42-1.87,.42s-1.21-.2-1.87-.42c-.55-.18-1.12-.37-1.73-.46-.64-.09-1.27-.07-1.89-.05-.7,.02-1.36,.05-1.87-.1-.51-.15-.98-.5-1.47-.86-.22-.17-.45-.34-.69-.5l4.22-11.61h10.6l4.22,11.61Zm-4.52-13.61h-10v-2h10v2Zm-11.75-11.89l.53-2.11h1.01c1.67,0,3.23,.83,4.16,2.23l.21,.32h0c.04,.07,.1,.1,.14,.15,.04,.04,.08,.1,.13,.13h0c.11,.07,.23,.12,.36,.15,.06,.01,.13,0,.19,0s.13,.01,.19,0c.13-.03,.25-.07,.36-.15h0c.06-.04,.1-.1,.14-.15,.04-.04,.1-.08,.13-.13h0l.21-.33c.93-1.39,2.49-2.23,4.16-2.23h1.01l.53,2.11c.17,.67,.25,1.37,.25,2.06,0,1.09-.21,2.15-.61,3.16l-1.07,2.67h-10.65l-1.07-2.67c-.4-1.01-.61-2.07-.61-3.16,0-.69,.09-1.39,.25-2.06Zm18.78,34.5c-.58,.15-1.18,.3-1.74,.56-.56,.26-1.01,.6-1.46,.93-.49,.37-.96,.71-1.47,.87-.52,.15-1.18,.13-1.88,.11-.61-.02-1.25-.04-1.88,.05-.62,.09-1.19,.28-1.74,.46-.65,.22-1.27,.42-1.86,.42s-1.2-.2-1.86-.42c-.55-.18-1.13-.37-1.74-.46-.63-.09-1.27-.07-1.88-.05-.71,.02-1.37,.04-1.88-.11-.51-.15-.98-.5-1.47-.87-.44-.33-.9-.67-1.46-.93-.55-.26-1.16-.41-1.74-.56-.24-.06-.47-.12-.69-.19l.97-2.67c.23,.07,.44,.14,.63,.23,.37,.17,.73,.44,1.1,.72,.58,.44,1.25,.93,2.11,1.18,.82,.24,1.67,.21,2.49,.18,.55-.02,1.08-.04,1.54,.03,.44,.06,.9,.22,1.39,.38,.74,.25,1.58,.52,2.49,.52s1.75-.28,2.49-.52c.49-.16,.95-.31,1.39-.38,.46-.07,.99-.05,1.54-.03,.82,.03,1.67,.06,2.5-.18,.86-.25,1.52-.75,2.11-1.18,.38-.28,.74-.55,1.12-.73,.18-.09,.39-.16,.61-.23l.97,2.67c-.22,.07-.45,.13-.69,.19Z" />
            </svg>
            <div className="tracking-widest text-center">FORMAL</div>
            <div className="tracking-widest text-center text-xs text-gray-500">
              (No colores blancos o similares)
            </div>
          </div>
        </div>
      </Screen>
      <Screen>
        <div className="p-8">
          <h1 className="text-xl tracking-widest">CRONOGRAMA DE ACTIVIDADES</h1>
          <div className="flex mx-auto mt-12 justify-center">
            <div className="border-r text-right border-r-black pr-4 flex-1">
              <div className="border-b ml-12 border-dashed border-black">
                Ceremonia
              </div>
              <div className="mt-20 border-b border-dashed border-black">
                Cena
              </div>
            </div>
            <div className="pl-4 flex-1 pr-4">
              <div className="mt-12 border-b border-dashed border-black">
                Recepcion
              </div>
              <div className="mt-20 border-b border-dashed border-black">
                Fiesta
              </div>
            </div>
          </div>
          <div>Pases</div>
          <div>Confirmacion</div>
        </div>
      </Screen>
      <Screen>Quinto</Screen>
      <Screen>Sexto</Screen>
    </div>
  );
}

export default App;
