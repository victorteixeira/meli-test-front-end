import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import './style.scss';

const Header = props => {
    const router = useRouter();
    const query = router.query;

    const [search, setSearch] = useState(query.search);
    useEffect(() => {
        setSearch(query.search);
    }, [query.search]);

    const onChange = e => {
        setSearch(e.target.value);
    };

    const onSubmit = async e => {
        e.preventDefault();
        router.push(`/items?search=${search}`);
    };

    return (
        <header className="header">
            <div className="header__container">
                <Link href="/">
                    <a href="/" className="header__container__logo" title="Mercado Livre">Mercado Livre</a>
                </Link>
                <form onSubmit={onSubmit} className="header__container__form">
                    <input name="search" type="text" className="header__container__input" placeholder="Nunca dejes de buscar" defaultValue={search} onChange={onChange} />
                    <button className="header__container__button" title="Buscar"></button>
                </form>
            </div>
        </header>
    )
};

export default Header;
