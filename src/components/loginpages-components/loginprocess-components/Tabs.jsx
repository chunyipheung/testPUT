export default function Tabs({ buttons, ButtonsContainer = "menu" }) {
    return (
      <>
        <ButtonsContainer className="mt-20 flex gap-3 justify-center sm:mx-auto sm:w-full sm:max-w-md">{buttons}</ButtonsContainer>
      </>
    );
  }