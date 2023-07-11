import React, { useRef, useState, useEffect } from "react";
import Loading from "../shared/Loading";
import Editor from 'react-monaco-editor';
import { makeStyles } from "@mui/styles";
import { useSearchParams } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const BagelDB = require("bageldb-beta");

const db = new BagelDB();

const ACTION_TYPE = {
    PING: "ping",
    INSERT: "insert",
    SEARCH: "search",
    GET_OPEN_AI_EMBEDDING: "getOpenAIEmbedding",
};

const useStyles = makeStyles({
    action: {
        width: "calc(100vw - 60px)",
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '20px'
    },
    actionButton: {
        width: '60px',
        height: '40px',
        cursor: 'pointer',
        backgroundColor: '#F3B02E',
        borderRadius: '6px',
        border: 'none',
        marginRight: '10px'
    },
    shareQueryButton: {
        height: '40px',
        cursor: 'pointer',
        backgroundColor: '#F3B02E',
        borderRadius: '6px',
        border: 'none',
        marginRight: '10px',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    editorWrapper: {
        display: 'flex'
    }
});

const BagelConsole = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isCopping, setIsCopping] = useState(false);
    const [open, setOpen] = useState(false);
    const [searchParams] = useSearchParams();
    const [queries, setQueries] = useState([]);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(15);
    const requestJson = searchParams.get("json");

    const [responseEditorCode, setResponseEditorCode] = React.useState(null);
    const classes = useStyles();


    const defaultRequestData = `{
        "type": "insert",
        "index": "myIndex",
        "data": [
          {
            "id": "vec1",
            "values": [
              0.1,
              0.2,
              0.3,
              0.4
            ],
            "metadata": {
              "genre": "drama"
            }
          },
          {
            "id": "vec2",
            "values": [
              0.2,
              0.3,
              0.4,
              0.5
            ],
            "metadata": {
              "genre": "action"
            }
          }
        ]
      }`;

    const [requestEditorCode, setRequestEditorCode] = React.useState(
        requestJson ? JSON.parse(requestJson) : defaultRequestData
    );

    const handleClose = () => {
        setOpen(false);
    }

    /* Opening history queries dialog*/
    const handleClickOpen = () => {
        const queries = JSON.parse(localStorage.getItem("queries")) || [];
        setQueries(queries);
        setOpen(true);
    };

    /**History queries next and previous successively */
    const handleNext = () => {
        setEnd(Math.min(queries.length, end + 15));
    }

    const handlePrevious = () => {
        setEnd(Math.max(15, end - 15));
    }


    useEffect(() => {
        setStart(Math.max(0, end - 15));
    }, [end])

    const responseEditorRef = useRef({});

    const handleEditorChange = (value) => setRequestEditorCode(value);
    const handleEditorDidMount = (editor) =>
        (responseEditorRef.current = editor);

    /* Task of a share query button, copying share query url */
    const shareQueryActionButton = async () => {
        const queryString = encodeURIComponent(JSON.stringify(requestEditorCode));
        const url = `${window.location.href}?json=${queryString}`;
        try {
            setIsCopping(true);
            await navigator.clipboard.writeText(url);
            setTimeout(() => setIsCopping(false), 1000);
        } catch (error) {
            setIsCopping(false);
        }
    };

    /**Fetching request data and storing that to localStorage*/
    const fetchRequestData = async () => {
        setIsLoading(true);
        const requestData = JSON.parse(requestEditorCode);
        setResponseEditorCode("");
        try {
            let queries = JSON.parse(localStorage.getItem("queries")) || [];
            queries.push(requestData);
            localStorage.setItem("queries", JSON.stringify(queries));
            const data = await actionToBagelDB(requestData);
            setResponseEditorCode(JSON.stringify(data));
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    /* Action to BagelDB*/
    const actionToBagelDB = async (opts) => {
        const { type, index, inputText, data } = opts;
        switch (type) {
            case ACTION_TYPE.PING: {
                return await db.ping();
            }
            case ACTION_TYPE.INSERT: {
                return await db.insert(index, data);
            }
            case ACTION_TYPE.SEARCH: {
                return await db.search(index, data);
            }
            case ACTION_TYPE.GET_OPEN_AI_EMBEDDING: {
                return await db.getOpenAIEmbedding(inputText);
            }
            default:
                return
        }
    };

    return <>
        <div className={classes.action}>
            <div style={{ marginRight: '10px' }}>
                {isLoading && <Loading size={40} />}
            </div>
            <button className={classes.actionButton}
                onClick={fetchRequestData}
            >{!isLoading ? (
                <svg
                    width="24"
                    height="24"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 10 16"
                >
                    <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
                </svg>
            ) : (
                <svg
                    fill="currentColor"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M5.92 24.096q0 0.832 0.576 1.408t1.44 0.608h16.128q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-16.128q-0.832 0-1.44 0.576t-0.576 1.44v16.16z"></path>
                </svg>
            )}
            </button>
            <button
                className={classes.shareQueryButton}
                onClick={shareQueryActionButton}
            >
                {!isCopping && (
                    <svg
                        width="24"
                        height="24"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 18"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"
                        />
                    </svg>
                )}
                {isCopping && (
                    <svg
                        width="24"
                        height="24"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 21 21"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                        />
                    </svg>
                )}
                {isCopping ? "Copied" : "Share Query"}
            </button>
            <button
                className={classes.shareQueryButton}
                type="button"
                onClick={handleClickOpen}
            >
                <svg
                    width="24"
                    height="24"
                    className="w-6 h-6 text-gray-800 dark:text-dark pr-2"
                    version="1.1"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.5,0 C7,0 3.9,1.9 2.3,4.8 L0,2.5 L0,9 L6.5,9 L3.7,6.2 C5,3.7 7.5,2 10.5,2 C14.6,2 18,5.4 18,9.5 C18,13.6 14.6,17 10.5,17 C7.2,17 4.5,14.9 3.4,12 L1.3,12 C2.4,16 6.1,19 10.5,19 C15.8,19 20,14.7 20,9.5 C20,4.3 15.7,0 10.5,0 L10.5,0 Z M9,5 L9,10.1 L13.7,12.9 L14.5,11.6 L10.5,9.2 L10.5,5 L9,5 L9,5 Z"
                        id="Shape"
                    />
                </svg>{" "}
                History
            </button>

        </div>
        <div className={classes.editorWrapper}>
            {/* Request Editor */}
            <Editor
                loading={<Loading />}
                height="100vh"
                defaultLanguage="JSON"
                value={requestEditorCode}
                theme="light"
                options={{ fontSize: 13, minimap: { enabled: false } }}
                onChange={handleEditorChange}
            />
            {/* Response Editor */}
            <Editor
                loading={<Loading />}
                height="100vh"
                defaultLanguage="JSON"
                value={responseEditorCode}
                theme="light"
                options={{
                    readOnly: true,
                    fontSize: 13,
                    minimap: { enabled: false },
                    lineNumbers: "off",
                    formatOnPaste: true,
                    formatOnType: true,
                }}
                onMount={handleEditorDidMount}
            />
            {/* History Button Dialog */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title"> Queries in the History </DialogTitle>
                <DialogContent>
                    {queries.length > 0 && queries.slice(start, end).map((q, index) => <p key={index}>{index + 1}-{JSON.stringify(q)}</p>)}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handlePrevious}>
                        <ChevronLeft />
                    </Button>
                    <Button onClick={handleNext}>
                        <ChevronRight />
                    </Button>
                    <Button onClick={handleClose}>
                        {'Close'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    </>
}
export default BagelConsole;
