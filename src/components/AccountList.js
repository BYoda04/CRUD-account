
const AccountList = ({accounts,selectAccount,deleteAccounts,getId,id}) => {

    return (
        <>
            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel2">Delet user</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>getId(null)}></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete the user?
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>deleteAccounts(id)}>Delet</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>getId(null)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="list-group">
                {accounts.map(account=>(
                    <li className="list-group-item" key={account?.id}>
                        <div className="mb-3 row user-item">
                            <div className="col-9">
                                <h2>{account?.first_name} {account?.last_name}</h2>
                                <p>{account?.email}</p>
                                <p><ion-icon name="balloon-outline"></ion-icon>{account?.birthday}</p>
                            </div>
                            <div className="col-1 align-self-center account">
                                <button class="btn delet" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onClick={()=>getId(account.id)}>
                                    <i class="bi bi-person-x-fill delet-account"></i>
                                </button>
                            </div>
                            <div className="col-1 align-self-center account">
                                <a className="btn edit" data-bs-toggle="modal" href="#exampleModalToggle" role="button" onClick={()=>selectAccount(account)}>
                                    <i className="bi bi-pencil-square edit-account"></i>
                                </a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default AccountList;