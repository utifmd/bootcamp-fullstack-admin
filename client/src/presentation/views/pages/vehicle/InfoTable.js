import { asCapitalize, asDateTimeFormat, asIdr } from "../../helper"
const InfoTable = ({ vehicle }) => <table class="table align-middle mb-0 bg-white">
    <thead class="bg-light">
        <tr>
            <th>Name</th>
            <th>From</th>
            <th>To</th>
            <th>Fuel</th>
            <th>Income</th>
        </tr>
    </thead>
    <tbody>
        {vehicle.histories.map(history =>
            <tr key={history.id}>
                <td>
                    <div class="d-flex align-items-center">
                        <img
                            src={vehicle.imageUrl}
                            class="rounded-circle"
                            alt=""
                            style={{ width: '45px', height: '45px' }}
                        />
                        <div class="ms-3">
                            <p class="fw-bold mb-1">{vehicle.name}</p>
                            <p class="text-muted mb-0"><span class="badge badge-primary rounded-pill d-inline">{asCapitalize(vehicle.vendor)}</span></p>
                        </div>
                    </div>
                </td>
                <td>
                    <p class="fw-normal mb-1">{asDateTimeFormat(history.createdAt)}</p>
                </td>
                <td>
                    <p class="fw-normal mb-1">{asDateTimeFormat(history.updatedAt)}</p>
                </td>
                <td>{asIdr(history.fuel)}</td>
                <td>{asIdr(history.income)}</td>
            </tr>
        )}
    </tbody>
</table>
export default InfoTable