function newRoot() {
	return {};
}
function newTracker() {
	return {
		PNLCBTN: {
			description: "rf_inbound_pnlc",
			type: "simple",
			data: {}
		},
		TOTALBTN: {
			description: "rf_inbound_totals",
			type: "simple",
			data: {}
		},
		RFAUTHBTN: {
			description: "rf_inbound_auth",
			type: "simple",
			data: {}
		},
		RFIBND: {
			description: "rf_inbound_dh_diag",
			type: "simple",
			data: {}
		},
		RFIBNE: {
			description: "rf_inbound_dh_est",
			type: "simple",
			data: {}
		},
		RFIBNF: {
			description: "rf_inbound_dh_fail",
			type: "simple",
			data: {}
		},
		RFIBNV: {
			description: "rf_inbound_dh_car",
			type: "simple",
			data: {}
		},
		TGAFOABTN: {
			description: "chob_oopc_authed",
			type: "simple",
			data: {}
		},
		TGAFODBTN: {
			description: "chob_oopc_declined",
			type: "simple",
			data: {}
		},
		TGAFOCBTN: {
			description: "chob_oopc_callback",
			type: "simple",
			data: {}
		},
		TGAFSABTN: {
			description: "chob_ship_authed",
			type: "simple",
			data: {}
		},
		TGAFSDBTN: {
			description: "chob_ship_declined",
			type: "simple",
			data: {}
		},
		TGAFSCBTN: {
			description: "chob_ship_callback",
			type: "simple",
			data: {}
		},
		TGAFOSABTN: {
			description: "chob_both_authed",
			type: "simple",
			data: {}
		},
		TGAFOSDSBTN: {
			description: "chob_both_declineship",
			type: "simple",
			data: {}
		},
		TGAFOSDBBTN: {
			description: "chob_both_declineall",
			type: "simple",
			data: {}
		},
		TGAFOSCBTN: {
			description: "chob_both_callback",
			type: "simple",
			data: {}
		},
		NALVM: {
			description: "chob_noans_lvm",
			type: "simple",
			data: {}
		},
		NANVM: {
			description: "chob_noans_novm",
			type: "simple",
			data: {}
		},
		authEmail: {
			description: "auth_disclaim_email",
			type: "simple",
			data: {}
		},
		toGen: {
			description: "xfer_togen",
			type: "simple",
			data: {}
		},
		newClaim: {
			description: "xfer_newclaim",
			type: "simple",
			data: {}
		},
		result1: {
			description: "ch_understood",
			type: "simple",
			data: {}
		},
		result2: {
			description: "no_ans_end",
			type: "simple",
			data: {}
		},
		picR: {
			description: "picture_request",
			type: "simple",
			data: {}
		},
		recR: {
			description: "record_request",
			type: "simple",
			data: {}
		},
		noansR: {
			description: "record_request_noans",
			type: "simple",
			data: {}
		},
		T3: {
			description: "review_note",
			type: "simple",
			data: {}
		},
		T4: {
			description: "inspection_template",
			type: "simple",
			data: {}
		},
		R2: {
			description: "copy_textarea2",
			type: "functions",
			data: {}
		},
		R8: {
			description: "ta2_oem_part",
			type: "simple",
			data: {}
		},
		R9: {
			description: "ta2_am_part",
			type: "simple",
			data: {}
		},
		R10: {
			description: "ta2_over250_part",
			type: "simple",
			data: {}
		},
		R11: {
			description: "ta2_bulk_part",
			type: "simple",
			data: {}
		},
		R12: {
			description: "ta2_evac_labor",
			type: "simple",
			data: {}
		},
		R13: {
			description: "ta2_align_labor",
			type: "simple",
			data: {}
		},
		R16: {
			description: "ta2_labor",
			type: "simple",
			data: {}
		},
		R17: {
			description: "ta2_diag",
			type: "simple",
			data: {}
		},
		SENDPART: {
			description: "sent_part_intake",
			type: "simple",
			data: {}
		},
		SENDLABOR: {
			description: "sent_labor_intake",
			type: "simple",
			data: {}
		},
		SENDDIAG: {
			description: "sent_diag_intake",
			type: "simple",
			data: {}
		},
		clearIntake: {
			description: "clear_intake",
			type: "functions",
			data: {}
		},
		DJKahlid: {
			description: "add_box_intake",
			type: "functions",
			data: {}
		},
		MTVsNEXT: {
			description: "next_intake",
			type: "functions",
			data: {}
		},
		displayItem: {
			description: "display_edit",
			type: "customization",
			data: {}
		},
		contentItem: {
			description: "content_edit",
			type: "customization",
			data: {}
		},
		sizeItem: {
			description: "size_edit",
			type: "customization",
			data: {}
		},
		positionItem: {
			description: "position_edit",
			type: "customization",
			data: {}
		},
		newButtonItem: {
			description: "new_button_edit",
			type: "customization",
			data: {}
		},
		deleteCustomItem: {
			description: "delete_custom_edit",
			type: "customization",
			data: {}
		},
		toggleListItem: {
			description: "toggle_list_edit",
			type: "customization",
			data: {}
		},
		masterResetItem: {
			description: "master_reset",
			type: "customization",
			data: {}
		},
		LOCK1: {
			description: "menu_settings",
			type: "menu",
			data: {}
		},
		appearance: {
			description: "menu_appearance",
			type: "menu",
			data: {}
		},
		BtnBuilder: {
			description: "menu_toggle",
			type: "menu",
			data: {}
		},
		fluid: {
			description: "ta2_fluid_price",
			type: "info",
			data: {}
		},
		otherFPS: {
			description: "fluid_price",
			type: "info",
			data: {}
		},
		swap1: {
			description: "side_nav_access",
			type: "menu",
			data: {}
		},
		T71: {
			remap: "picR",
			type: "none",
			data: {}
		},
		T81: {
			remap: "recR",
			type: "none",
			data: {}
		},
		T91: {
			remap: "noansR",
			type: "none",
			data: {}
		},
		T101: {
			remap: "T2",
			type: "none",
			data: {}
		},
		statusNote: {
			description: "status_note_main",
			type: "complex",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		submitStat: {
			description: "submit_stat",
			type: "finish",
			finish: "statusNote",
			data: {}
		},
		cancelStat: {
			description: "cancel_stat",
			type: "cancel",
			target: "statusNote",
			data: {}
		},
		newAuthstarter: {
			description: "auth_note_main",
			type: "complex",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		finish_auth: {
			description: "finish_auth",
			type: "finish",
			finish: "newAuthstarter",
			data: {}
		},
		cancel_auth: {
			description: "cancel_auth",
			type: "cancel",
			target: "newAuthstarter",
			data: {}
		},
		transAuthBtn: {
			description: "trans_auth_main",
			type: "complex",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		transAuthRoutine: {
			description: "trans_auth_finish",
			type: "finish",
			finish: "transAuthBtn",
			data: {}
		},
		transCancelBtn: {
			description: "trans_auth_cancel",
			type: "cancel",
			target: "transAuthBtn",
			data: {}
		},
		T1: {
			description: "pt_transfer_main",
			type: "complex",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		cancelPT: {
			description: "pt_transfer_cancel",
			type: "cancel",
			target: "T1",
			data: {}
		},
		T2: {
			description: "ch_statement_main",
			type: "complex",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		cancelState: {
			description: "cancel_statement",
			type: "cancel",
			target: "T2",
			data: {}
		},
		tutorials: {
			description: "tutorial",
			type: "tool",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		closebtn: {
			description: "close_help",
			type: "finish",
			finish: "tutorials",
			data: {}
		},
		tools: {
			description: "tool_center",
			type: "tool",
			isTimed: true,
			timeStarted: null,
			data: {}
		},		
		PAPriceBtn: {
			description: "price_tool_main",
			type: "tool",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		QuickAnsBtn: {
			description: "quick_ans_main",
			type: "tool",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		MileDiscrepBtn: {
			description: "mile_discrep_main",
			type: "tool",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		mileagebtn: {
			description: "mile_discrep_finish",
			type: "finish",
			finish: "MileDiscrepBtn",
			data: {}
		},
		trackerToolBtn: {
			description: "tracker_tool_main",
			type: "tool",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		checkIt: {
			description: "tracker_generate",
			type: "functions",
			data: {}
		},
		resetRep: {
			description: "tracker_reset",
			type: "functions",
			data: {}
		},
		SOPs: {
			description: "policy_center_main",
			type: "policy",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		MBIClaimsBtn: {
			description: "mbi_policy_info",
			type: "policy",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		xfer2790Btn: {
			description: "xfer_policy_info",
			type: "policy",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		TeslaBtn: {
			description: "tesla_policy_info",
			type: "policy",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		DoNotUseBtn: {
			description: "donotuse_policy_info",
			type: "policy",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		IsItPTBtn: {
			description: "isitpt_policy_info",
			type: "policy",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		partsResBtn: {
			description: "parts_res_policy_info",
			type: "policy",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		DiagnosticBtn: {
			description: "diagnostic_policy_info",
			type: "policy",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		PANoOrderBtn: {
			description: "noorder_policy_info",
			type: "policy",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		exitRec: {
			description: "exit_tool_policy",
			type: "finish",
			finish: "tools",
			data: {}
		},
		DiagDivBtn: {
			description: "diag_tool_main",
			type: "diag",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		exitRcrce2: {
			description: "diag_tool_exit",
			type: "finish",
			finish: "DiagDivBtn",
			data: {}
		},
		coolingBtn: {
			description: "Cooling_diag_info",
			type: "diag",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		turboBtn: {
			description: "Turbo_diag_info",
			type: "diag",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		timingBtn: {
			description: "Timing_diag_info",
			type: "diag",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		steeringBtn: {
			description: "Steering_diag_info",
			type: "diag",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		suspensionBtn: {
			description: "Suspension_diag_info",
			type: "diag",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		acBtn: {
			description: "AC_diag_info",
			type: "diag",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		electricalBtn: {
			description: "Electrical_diag_info",
			type: "diag",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		fuelBtn: {
			description: "Fuel_diag_info",
			type: "diag",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		DiagnosticAssistancesidenav: {
			remap: "DiagDivBtn",
			type: "none",
			data: {}
		},
		Coolingsidenav: {
			remap: "coolingBtn",
			type: "none",
			data: {}
		},
		Turbosidenav: {
			remap: "turboBtn",
			type: "none",
			data: {}
		},
		Timingsidenav: {
			remap: "timingBtn",
			type: "none",
			data: {}
		},
		Steeringsidenav: {
			remap: "steeringBtn",
			type: "none",
			data: {}
		},
		Suspensionsidenav: {
			remap: "suspensionBtn",
			type: "none",
			data: {}
		},
		ACsidenav: {
			remap: "acBtn",
			type: "none",
			data: {}
		},
		Electricalsidenav: {
			remap: "electricalBtn",
			type: "none",
			data: {}
		},
		Fuelsidenav: {
			remap: "fuelBtn",
			type: "none",
			data: {}
		},
		InspReviewsidenav: {
			remap: "T3",
			type: "none",
			data: {}
		},
		InspectionTemplatesidenav: {
			remap: "T4",
			type: "none",
			data: {}
		},
		Authorizationsidenav: {
			remap: "newAuthstarter",
			type: "none",
			data: {}
		},
		Statussidenav: {
			remap: "statusNote",
			type: "none",
			data: {}
		},
		Toolssidenav: {
			remap: "tools",
			type: "none",
			data: {}
		},
		TrackerToolsidenav: {
			remap: "trackerToolBtn",
			type: "none",
			data: {}
		},
		PricingGuidesidenav: {
			remap: "PAPriceBtn",
			type: "none",
			data: {}
		},
		MileageIssuessidenav: {
			remap: "MileDiscrepBtn",
			type: "none",
			data: {}
		},
		QuickAnswerssidenav: {
			remap: "QuickAnsBtn",
			type: "none",
			data: {}
		},
		PTTransfersidenav: {
			remap: "T1",
			type: "none",
			data: {}
		},
		CHStatementsidenav: {
			remap: "T2",
			type: "none",
			data: {}
		},
		Policysidenav: {
			remap: "tools",
			type: "none",
			data: {}
		},
		MBIsidenav: {
			remap: "MBIClaimsBtn",
			type: "none",
			data: {}
		},
		Xfer2790sidenav: {
			remap: "xfer2790Btn",
			type: "none",
			data: {}
		},
		Teslasidenav: {
			remap: "TeslaBtn",
			type: "none",
			data: {}
		},
		DoNotUsesidenav: {
			remap: "DoNotUseBtn",
			type: "none",
			data: {}
		},
		IsItPTsidenav: {
			remap: "IsItPTBtn",
			type: "none",
			data: {}
		},
		PartsReturnssidenav: {
			remap: "partsResBtn",
			type: "none",
			data: {}
		},
		PartsRessidenav: {
			remap: "partsResBtn",
			type: "none",
			data: {}
		},
		Diagnosticsidenav: {
			remap: "DiagnosticBtn",
			type: "none",
			data: {}
		},
		DoNotOrdersidenav: {
			remap: "PANoOrderBtn",
			type: "none",
			data: {}
		},
		navtag: {
			description: "sop_access",
			type: "info",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Start_a_Claim: {
			description: "pdf_Start_a_Claim",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Search_For_Claims: {
			description: "pdf_Search_For_Claims",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Contract_Holder_Verification: {
			description: "pdf_Contract_Holder_Verification",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Parts_Verification: {
			description: "pdf_Parts_Verification",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Labor_Verification: {
			description: "pdf_Labor_Verification",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Assign_A_Task: {
			description: "pdf_Assign_A_Task",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Set_An_Inspection: {
			description: "pdf_Set_An_Inspection",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Request_Records: {
			description: "pdf_Request_Records",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Upload_Documents: {
			description: "pdf_Upload_Documents",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Add_Or_Update_Repair_Facilites: {
			description: "pdf_Add_Or_Update_Repair_Facilites",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Finalizing_Claims: {
			description: "pdf_Finalizing_Claims",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Claim_Notes: {
			description: "pdf_Claim_Notes",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Handling_Escalations: {
			description: "pdf_Handling_Escalations",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Parts_Resolution: {
			description: "pdf_Parts_Resolution",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Part_Returns_and_Freight: {
			description: "pdf_Part_Returns_and_Freight",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Close_Or_Set_Inactive: {
			description: "pdf_Close_Or_Set_Inactive",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Warranties_Recalls_TSBs: {
			description: "pdf_Warranties_Recalls_TSBs",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Recognizing_Altered_Records: {
			description: "pdf_Recognizing_Altered_Records",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Escalating_Misrepresentation_to_Legal: {
			description: "pdf_Escalating_Misrepresentation_to_Legal",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		RF_Management_Case: {
			description: "pdf_RF_Management_Case",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		TL_Request_Support_Regarding_Network_RF: {
			description: "pdf_TL_Request_Support_Regarding_Network_RF",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		TL_Help_Request_Vendor_Network: {
			description: "pdf_TL_Help_Request_Vendor_Network",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Reviewing_Branded_Title: {
			description: "pdf_Reviewing_Branded_Title",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Reviewing_Commerical_Usage: {
			description: "pdf_Reviewing_Commerical_Usage",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Reviewing_Mileage_Discrepancies: {
			description: "pdf_Reviewing_Mileage_Discrepancies",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Reviewing_Modifications: {
			description: "pdf_Reviewing_Modifications",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Reviewing_Oversized_Tires: {
			description: "pdf_Reviewing_Oversized_Tires",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Reviewing_Suspension_Modification: {
			description: "pdf_Reviewing_Suspension_Modification",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Handle_MBI_Claims: {
			description: "pdf_Handle_MBI_Claims",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Handle_Preferred_Customers: {
			description: "pdf_Handle_Preferred_Customers",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Key_And_Authorize_Tow: {
			description: "pdf_Key_And_Authorize_Tow",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Key_Rental_Reimbursement: {
			description: "pdf_Key_Rental_Reimbursement",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Key_Roadside_Reimbursement: {
			description: "pdf_Key_Roadside_Reimbursement",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Request_Tracking: {
			description: "pdf_Request_Tracking",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Make_A_3Way_Call: {
			description: "pdf_Make_A_3Way_Call",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Reach_Out_To_DataManagement: {
			description: "pdf_Reach_Out_To_DataManagement",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Terms_And_Abbreviations: {
			description: "pdf_Terms_And_Abbreviations",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Enhanced_Deductible: {
			description: "pdf_Enhanced_Deductible",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Fluid_Pricing_Sheet: {
			description: "pdf_Fluid_Pricing_Sheet",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Employee_Handbook: {
			description: "Employee_Handbook",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		PT_Or_General_Claim: {
			description: "pdf_PT_Or_General_Claim",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Repair_Facility_Types: {
			description: "pdf_Repair_Facility_Types",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		PRF_Location: {
			description: "pdf_PRF_Location",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		CMS_Emails: {
			description: "pdf_CMS_Emails",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Text_Notifications: {
			description: "pdf_Text_Notifications",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		PT_First_Contact: {
			description: "pdf_PT_First_Contact",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		State_Tax: {
			description: "pdf_State_Tax",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		},
		Check_Available_PTO: {
			description: "pdf_Check_Available_PTO",
			type: "pdfsop",
			isTimed: true,
			timeStarted: null,
			data: {}
		}
	};
}