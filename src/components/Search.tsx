import styled from '@emotion/styled';
import { alpha, IconButton, InputBase, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import React, { useEffect, useState } from 'react'

interface ISearchBox {
    dataSource?: any[];
    setDataSource?: (data: any) => void;
}

const SearchBox: React.FC<ISearchBox> = ({ dataSource, setDataSource }) => {

    const [searchKey, setSearchKey] = useState<string>("");
    const originalDataSource: any[] = dataSource ?? [];


    const onReset = () => {
        setSearchKey("");
        setDataSource && setDataSource(originalDataSource);
    }

    const filterDataSourceBysearchKey = () => {
        // Escape special characters in the searchKey to build a valid regular expression
        const escapedSearchKey = searchKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        // Create a regular expression pattern that matches strings starting with the searchKey
        const regexPattern = new RegExp(`^${escapedSearchKey}`, 'i');

        const filter: any[] = dataSource?.filter((item: any) => regexPattern.test(item.name)) ?? []
        setDataSource && setDataSource(filter);
    }

    useEffect(() => {
        if (searchKey === "") {
            setDataSource && setDataSource(originalDataSource);
        } else {
            filterDataSourceBysearchKey()
        }

    }, [searchKey])


    return (
        <div>
            <OutlinedInput
                value={searchKey}
                sx={{ my: 1, flex: 1 }}
                placeholder="Search By Name"
                inputProps={{ 'aria-label': 'search by name' }}
                onChange={(e) => setSearchKey(e.target.value)}
            />
            {searchKey !== "" &&
                <IconButton
                    aria-label="search"
                    color='primary'
                    sx={{ mx: 1 }}
                    onClick={onReset}
                >
                    <RestartAltIcon />
                </IconButton>
            }

            <IconButton
                aria-label="search"
                color='primary'
                sx={{ mx: 1 }}
                disabled={searchKey === ""}
                onClick={filterDataSourceBysearchKey}
            >
                <SearchIcon />
            </IconButton>
        </div>
    )
}

export default SearchBox;