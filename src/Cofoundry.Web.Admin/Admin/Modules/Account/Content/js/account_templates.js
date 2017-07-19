angular.module('cms.account').run(['$templateCache',function(t){t.put('/Admin/Modules/Account/Js/Routes/AccountDetails.html','<cms-page-header cms-title="My Account"></cms-page-header><cms-form cms-name="mainForm"          cms-edit-mode="vm.editMode"          ng-submit="vm.save()"          cms-loading="vm.formLoadState.isLoading">    <!-- Default toolbar -->    <cms-page-actions ng-show="!vm.editMode">        <cms-button class="main-cta"                    cms-text="Edit"                    ng-click="vm.edit()"                    ng-show="!vm.editMode"                    ng-disabled="vm.globalLoadState.isLoading"                    ng-if="::vm.canUpdate"></cms-button>        <cms-button-link cms-href="#/change-password"                         cms-text="Change Password"                         ng-if="::vm.canUpdate"></cms-button-link>    </cms-page-actions>    <!-- Edit toolbar -->    <cms-page-actions ng-show="vm.editMode">        <cms-button-submit cms-text="Save"                           ng-show="vm.editMode"                           ng-disabled="vm.mainForm.$invalid || vm.globalLoadState.isLoading"                           cms-loading="vm.saveLoadState.isLoading"></cms-button-submit>        <cms-button cms-text="Cancel"                    ng-click="vm.cancel()"                    ng-show="vm.editMode"                    ng-disabled="vm.globalLoadState.isLoading"></cms-button>    </cms-page-actions>    <!-- Scrollable content area -->    <cms-page-body cms-content-type="form">        <cms-form-status></cms-form-status>        <!--MAIN-->        <cms-form-section cms-title="My Profile">            <cms-form-field-text cms-title="First Name"                                 cms-model="vm.command.firstName"                                 maxlength="32"                                 required></cms-form-field-text>            <cms-form-field-text cms-title="Last Name"                                 cms-model="vm.command.lastName"                                 maxlength="32"                                 required></cms-form-field-text>            <cms-form-field-email-address cms-title="Email"                                          cms-model="vm.command.email"                                          maxlength="128"                                          required></cms-form-field-email-address>        </cms-form-section>        <!--AUDIT DATA-->        <cms-form-section cms-title="Audit Data">            <cms-form-field-container cms-title="Password Last Changed">                <cms-time-ago cms-time="::vm.user.lastPasswordChangeDate"></cms-time-ago>            </cms-form-field-container>            <cms-form-field-container cms-title="Logged in">                <cms-time-ago cms-time="::vm.user.lastLoginDate"></cms-time-ago>            </cms-form-field-container>            <cms-form-field-container cms-title="Previous Login">                <cms-time-ago cms-time="::vm.user.previousLoginDate"></cms-time-ago>            </cms-form-field-container>            <cms-form-field-container cms-title="Created">                <cms-time-ago cms-time="::vm.user.auditData.createDate"></cms-time-ago>            </cms-form-field-container>        </cms-form-section>    </cms-page-body></cms-form>');
t.put('/Admin/Modules/Account/Js/Routes/ChangePassword.html','<cms-page-header cms-parent-title="My Account"                 cms-title="Change Password"></cms-page-header><cms-form cms-name="mainForm"          ng-submit="vm.save()"          cms-loading="vm.formLoadState.isLoading">    <!-- Default toolbar -->    <cms-page-actions>        <cms-button-submit class="main-cta"                           cms-text="Change Password"                           ng-disabled="vm.mainForm.$invalid || vm.globalLoadState.isLoading"                           cms-loading="vm.globalLoadState.isLoading"></cms-button-submit>        <cms-button-link cms-text="Cancel"                         cms-href="#/"></cms-button-link>    </cms-page-actions>    <!-- Scrollable content area -->    <cms-page-body cms-content-type="form">        <cms-form-status></cms-form-status>        <!--MAIN-->        <cms-form-section cms-title="Password">            <cms-form-field-password cms-title="Current Password"                                     cms-model="vm.command.oldPassword"                                     required></cms-form-field-password>            <cms-form-field-password cms-title="New Password"                                     cms-model="vm.command.newPassword"                                     minlength="8"                                     maxlength="300"                                     required></cms-form-field-password>            <cms-form-field-password cms-title="Confirm new password"                                     cms-model="vm.command.confirmNewPassword"                                     maxlength="300"                                     cms-match="vm.command.newPassword"                                     cms-match-val-msg="Passwords must match"                                     required></cms-form-field-password>        </cms-form-section>    </cms-page-body></cms-form>');}]);