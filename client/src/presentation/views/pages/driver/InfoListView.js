import React from "react"
import { asCapitalize, asDateFormat, asPhoneFormat } from "../../helper"
const InfoListView = ({ user }) => <ul class="list-group list-group-light">
    <li class="list-group-item d-flex justify-content-between align-items-center px-5">
        <div>
            <div class="fw-bold">
                Full name
            </div>
            <div class="text-muted"><i className="fas fa-edit fs"></i> {user.name}</div>
        </div>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center px-5">
        <div>
            <div class="fw-bold">Identity number</div>
            <div class="text-muted"><i className="fas fa-key fs"></i> {user.identityNumber}</div>
        </div>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center px-5">
        <div>
            <div class="fw-bold">Role</div>
            <div class="text-muted"><i className="fas fa-crown fs"></i> {asCapitalize(user.role)}</div>
        </div>
        <span class="badge rounded-pill badge-success">Joined on {asDateFormat(user.createdAt)}</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center px-5">
        <div>
            <div class="fw-bold">Phone number</div>
            <div class="text-muted"><i className="fas fa-edit fs"></i> {asPhoneFormat(user.telp)}</div>
        </div>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center px-5">
        <div>
            <div class="fw-bold">Email address</div>
            <div class="text-muted"><i className="fas fa-inbox fs"></i> {user.email}</div>
        </div>
    </li>
</ul>
export default InfoListView