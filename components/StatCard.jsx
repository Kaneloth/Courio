export function StatCard({title,value}){
 return(
  <div className="bg-white p-4 shadow rounded">
   <p>{title}</p><h2>{value}</h2>
  </div>
 )
}