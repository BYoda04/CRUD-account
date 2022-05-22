
const AccountList = ({accounts,selectAccount,deleteAccounts}) => {

    return (
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
                            <i class="bi bi-person-x-fill delet-account" onClick={()=>deleteAccounts(account.id)}></i>
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
    );
};

export default AccountList;