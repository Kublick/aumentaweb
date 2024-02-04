import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export function PreguntasAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          1-¿Cuánto tiempo tengo que dedicarle al programa por semana para tener
          resultados en 21 días o menos?
        </AccordionTrigger>
        <AccordionContent>
          Aproximadamente dos horas por semana + una sesión privada con Berenice
          de 45 minutos para montar tu campaña paso a paso.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          2-¿Si hago campaña publicitaria cuanto tengo que invertirle?
        </AccordionTrigger>
        <AccordionContent>
          Aproximadamente el valor de tu primera consulta varía dependiendo de
          tus precios a profundidad lo veremos en las sesiones personalizadas.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          3-¿Puedo hacer todo yo solo o necesito un equipo de trabajo?
        </AccordionTrigger>
        <AccordionContent>
          Para empezar puedes hacerlo tu solo porque es un programa para
          principiantes, te va a servir que sepas hacer esto, y para cuando
          quieras delegarlo sepas cómo evaluar que la persona que vayas a
          contratar te esté haciendo un buen trabajo. <br /> ¡Porque el que
          aprende, no depende! <br /> Dice un dicho
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>4-¿Necesito página web?</AccordionTrigger>
        <AccordionContent>No</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>5-¿Tengo que grabar videos?</AccordionTrigger>
        <AccordionContent>
          ¡No será necesario!, no tienes que hacer videos, si no quieres. Por
          que uno de los bonos de regalo si te inscribes yo te daré las
          plantillas que podrás personalizar, editar de images para tus
          anuncios.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>6-¿Cuándo empieza el curso?</AccordionTrigger>
        <AccordionContent>
          El martes 20 de febrero 6:30 pm hora de la ciudad de México
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>
          7-¿Cuándo es el último día que tengo para inscribirme?
        </AccordionTrigger>
        <AccordionContent>El lunes 19 de febrero</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>8-¿Cuánto tiempo dura el programa?</AccordionTrigger>
        <AccordionContent>
          En las primeras cuatro semanas, se darán las clases en vivo, vía zoom,
          por que como te explique es un curso muy concreto, ¡va directo al
          grano! por que la intención es que tu tengas resultados lo antes
          posible en 21 días o menos, pero una vez que adquieres el curso tienes
          acceso a ver la repetición del curso todo un año dentro de la
          plataforma oficial donde estarán los videos
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger>
          9-¿Este programa es para alguien que recién va saliendo de la
          universidad?
        </AccordionTrigger>
        <AccordionContent>
          Si tu ahorita eres alguien que va empezando, es por esta razón, que
          precisamente, que ocupas este curso, tienes que aprender como atraer
          pacientes para tu consulta, antes de abrir un consultorio.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-10">
        <AccordionTrigger>10-¿Hay pago en cuotas?</AccordionTrigger>
        <AccordionContent>
          Si solo se habilita con tarjeta de crédito facilidades de 3, 6, 9, o
          12 cuotas una por mes
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-11">
        <AccordionTrigger>
          ¿Qué pasa si no soy bueno con la tecnología?
        </AccordionTrigger>
        <AccordionContent>
          Si sabe usar whats app y darle play a un video de YouTube, con eso
          tienes para empezar, yo te enseno lo que te falte
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-12">
        <AccordionTrigger>
          12-¿El acceso al curso es de por vida o por cuantos meses?
        </AccordionTrigger>
        <AccordionContent>
          Yo te enseno la estrategia rápido en 4 semanitas, esto es para que
          tengas un curso muy concreto y veas resultados rapidito, pero y tú
          tienes todo un año el curso está disponible
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-13">
        <AccordionTrigger>13-¿Cada cuando son las clases?</AccordionTrigger>
        <AccordionContent>Cada semana los martes</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-14">
        <AccordionTrigger>
          14-¿Si no puedo estar en vivo quedaran grabadas?
        </AccordionTrigger>
        <AccordionContent>Si</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-15">
        <AccordionTrigger>
          15-¿Me puedo inscribir en otro momento?
        </AccordionTrigger>
        <AccordionContent>
          No porque cierro las inscripciones el lunes 19 de febrero el programa
          no está abierto todo el tiempo porque se entregarán las clases el vivo
          y estaré ocupada con los que si se anoten al curso.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-16">
        <AccordionTrigger>
          16-¿Si pago a cuotas, también tendré derecho a los bonos?
        </AccordionTrigger>
        <AccordionContent>Si</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-17">
        <AccordionTrigger>
          17-¿Cuándo volverán abrir inscripciones?
        </AccordionTrigger>
        <AccordionContent>
          Nose, no será pronto y tampoco creo que sea a este precio de
          lanzamiento con el 40% de descuento, si se vuelve abrir quizá ya esté
          más caro.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-18">
        <AccordionTrigger>
          18-No tengo tarjeta de crédito ¿Puedo pagar con tarjeta de débito o en
          efectivo?
        </AccordionTrigger>
        <AccordionContent>Si</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
