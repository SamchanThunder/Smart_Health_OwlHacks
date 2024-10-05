
import '../style_sheets/Marketplace.css';
export function Marketplace(){
    return(
        <div className="MarketContainer">
            <h1 className='text-red-600'>Test</h1>

            <table className='table-auto hover:table-fixed ml-4'>
               

                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Location</th>
                </tr>
            
                 <tr>
                    <th>1</th>
                    <th>John</th>
                    <th>$12.99</th>
                    <th>New York</th>
                </tr>


                <tr>
                    <th>2</th>
                    <th>Daniel</th>
                    <th>$12.99</th>
                    <th>New York</th>
                </tr>

                <tr> 
                    <th>3</th>
                    <th>James</th>
                    <th>$12.99</th>
                    <th>New York</th>
                </tr>

                <tr>
                    <th>4</th>
                    <th>Tyler</th>
                    <th>$12.99</th>
                    <th>New York</th>
                </tr>
            </table>
        </div>
    );
}
