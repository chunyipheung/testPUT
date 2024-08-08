export default function Box({ children }) {

    return(

        <div className=" bg-white px-6 py-14 shadow rounded-lg sm:px-12">
          {children}
        </div>

    );
}