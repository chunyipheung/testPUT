export default function Section({ children, moreClassName="" }) {

    return(
        <div className={`container mx-auto p-6 lg:px-8 ${moreClassName}`}>
            {children}
        </div>
    );

}