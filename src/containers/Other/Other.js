import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Swal from "sweetalert2";
import ButtonComponent from "./component/Button";
import DropFiles from "./component/DropFiles";
import CKEditor from "./component/CkEditor";
import QuillEditor from "./component/QuillEditor";
import TinyEditor from "./component/TinyEditor";
import * as FileAccachmentAction from "../../redux/actions/fileAttachment.action";

export default function Other(props) {
  const STATESFILE = {
    SELECT_OK: 0,
    FULL: 1,
    SUCCESS: 2,
  };

  const [state, setState] = useState({
    success: false,
    danger: false,
    warning: false,
    message: "",
    error: false,
    state: props.success ? STATESFILE.SUCCESS : STATESFILE.SELECT_OK,
    files: [],
    filesHas: [],
    loading: true,
    imgFile: "",
  });

  let dispatch = useDispatch();
  const fileAttachmentReducer = useSelector(
    (state) => state.fileAttachmentReducer
  );
  const fileAttachmentList = fileAttachmentReducer.result;

  useEffect(() => {
    dispatch(FileAccachmentAction.getFileAttachment("1234-5678-0000"));
  }, []);

  useEffect(() => {
    if (fileAttachmentList) {
      console.log(state.loading);
      if (fileAttachmentList.data.length > 0) {
        setTimeout(() => {
          setState({
            ...state,
            filesHas: fileAttachmentList.data,
            loading: false,
          });
        }, 500);
      } else {
        setTimeout(() => {
          setState({
            ...state,
            loading: false,
            filesHas: [],
          });
        }, 500);
      }
    }
  }, [fileAttachmentList]);

  /////SweetAlert///
  const handleConfirmCreate = () => {
    Swal.fire({
      title: "คุณต้องการบันทึกข้อมูลนี้ใช่หรือไม่",
      // text: "คุณต้องการเพิ่ม Knowledge ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText:
        "<div style='font-size:20px;font-family:ntlbold;font-weight:normal'>บันทึก</div>",
      cancelButtonText:
        "<div style='font-size:20px;font-family:ntlbold;font-weight:normal'>ยกเลิก</div>",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(FileAccachmentAction.Fileupload(state.files)).then((res) => {
          if (res.data && res.data.isSuccess) {
            setState({
              ...state,
              files: [],
            });
            dispatch(FileAccachmentAction.getFileAttachment("1234-5678-0000"));
            Swal.fire({
              icon: "success",
              title: "บันทึกข้อมูลสำเร็จ",
              showConfirmButton: false,
              timer: 1500,
            });
            // navigate("/branch");
          } else if (res.message && !res.data.isSuccess) {
            Swal.fire({
              icon: "error",
              title: "ผิดพลาด!",
              text: res.message,
            });
          } else {
          }
        });
      }
    });
  };

  const handleDeleteFile = (id) => {
    Swal.fire({
      title: "คุณต้องการลบไฟล์นี้ใช่หรือไม่",
      // text: "คุณต้องการเพิ่ม Knowledge ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText:
        "<div style='font-size:20px;font-family:ntlbold;font-weight:normal'>ตกลง</div>",
      cancelButtonText:
        "<div style='font-size:20px;font-family:ntlbold;font-weight:normal'>ยกเลิก</div>",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(FileAccachmentAction.deleteBranch(id)).then((res) => {
          if (res.data && res.isSuccess) {
            console.log(res);
            Swal.fire({
              icon: "success",
              title: "ลบข้อมูลสำรเร็จ",
              text: "ลบไฟล์ข้อมูลนี้แล้ว.",
              showConfirmButton: false,
              timer: 1500,
            });
            dispatch(FileAccachmentAction.getFileAttachment("1234-5678-0000"));
            // navigate("/branch");
          } else if (res.message && !res.data.isSuccess) {
            Swal.fire({
              icon: "error",
              title: "ผิดพลาด!",
              text: res.message,
            });
          } else {
          }
        });
      }
    });
  };

  /////FileAttachment///
  const onDrop = (acceptedFiles, rejectedFiles) => {
    const numberFiles =
      state.files.length + acceptedFiles.length + rejectedFiles.length;
    let files = state.files;

    if (errorFilesLength(numberFiles)) {
      reject(files);
      setState({
        ...state,
        state: STATESFILE.FULL,
      });
    } else {
      files = files.concat(acceptedFiles);
      setState({
        ...state,
        success: false,
        warning: false,
        danger: false,
        error: false,
        files: files,
        formData: state.formData,
        state: errorFilesLength(numberFiles + 1)
          ? STATESFILE.FULL
          : STATESFILE.SELECT_OK,
      });
    }
    console.log(files);
  };

  const remove = (file) => {
    setState((state) => {
      const files = state.files.filter((item) => item.name !== file.name);
      console.log(files);
      return {
        ...state,
        success: false,
        warning: false,
        danger: false,
        files,
      };
    });
  };

  const errorFilesLength = (numberFiles) => numberFiles > props.maxNumberFiles;

  const reject = (file) =>
    setState({ ...state, error: true, filesReject: file });

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={12}>
          <Card sx={{ minWidth: "275px" }}>
            <CardContent>
              <DropFiles
                loading={state.loading}
                onDrop={onDrop}
                remove={remove}
                handleDeleteFile={handleDeleteFile}
                files={state.files}
                fileAttachmentList={state.filesHas}
                getFileInfoById={(param) =>
                  dispatch(FileAccachmentAction.getFileInfoById(param))
                }
              />
              <ButtonComponent handleConfirmCreate={handleConfirmCreate} />
              <CKEditor />
              <QuillEditor />
              <TinyEditor />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
