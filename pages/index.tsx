import NavbarLayout from '../layouts/NavbarLayout';

const Index = () => {
  return (
    <NavbarLayout pageTitle="Главная">
      <div className="center">
        <h1>Добро пожаловать</h1>
        <h3>Здесь собраны мои любимые треки!</h3>
      </div>

      <style jsx>{`
        .center {
          margin-top: 150px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </NavbarLayout>
  );
};

export default Index;
