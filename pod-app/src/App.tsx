import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
// Layouts
import StudentLayout from '@/components/layout/StudentLayout'
import TeacherLayout from '@/components/layout/TeacherLayout'
import AdminLayout from '@/components/layout/AdminLayout'
// Student
import StudentHome from '@/pages/student/StudentHome'
import StudentDesignNew from '@/pages/student/StudentDesignNew'
import StudentDesigns from '@/pages/student/StudentDesigns'
import StudentProducts from '@/pages/student/StudentProducts'
import StudentOrders from '@/pages/student/StudentOrders'
import StudentLearn from '@/pages/student/StudentLearn'
import StudentAchievements from '@/pages/student/StudentAchievements'
import StudentNotifications from '@/pages/student/StudentNotifications'
// Teacher
import TeacherHome from '@/pages/teacher/TeacherHome'
import TeacherReview from '@/pages/teacher/TeacherReview'
import TeacherReviewDetail from '@/pages/teacher/TeacherReviewDetail'
import TeacherReviewApproved from '@/pages/teacher/TeacherReviewApproved'
import TeacherReviewRejected from '@/pages/teacher/TeacherReviewRejected'
import TeacherStudents from '@/pages/teacher/TeacherStudents'
import TeacherClasses from '@/pages/teacher/TeacherClasses'
import TeacherTasks from '@/pages/teacher/TeacherTasks'
import TeacherTaskNew from '@/pages/teacher/TeacherTaskNew'
import TeacherGrading from '@/pages/teacher/TeacherGrading'
import TeacherScores from '@/pages/teacher/TeacherScores'
import TeacherReports from '@/pages/teacher/TeacherReports'
import TeacherExport from '@/pages/teacher/TeacherExport'
import TeacherNotifications from '@/pages/teacher/TeacherNotifications'
// Admin
import AdminDashboard from '@/pages/admin/AdminDashboard'
import AdminMetrics from '@/pages/admin/AdminMetrics'
import AdminDepartments from '@/pages/admin/AdminDepartments'
import AdminClasses from '@/pages/admin/AdminClasses'
import AdminSemesters from '@/pages/admin/AdminSemesters'
import AdminTeachers from '@/pages/admin/AdminTeachers'
import AdminStudents from '@/pages/admin/AdminStudents'
import AdminPermissions from '@/pages/admin/AdminPermissions'
import AdminProducts from '@/pages/admin/AdminProducts'
import AdminPoints from '@/pages/admin/AdminPoints'
import AdminSettings from '@/pages/admin/AdminSettings'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Student Routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentHome />} />
          <Route path="design/new" element={<StudentDesignNew />} />
          <Route path="designs" element={<StudentDesigns />} />
          <Route path="products" element={<StudentProducts />} />
          <Route path="orders" element={<StudentOrders />} />
          <Route path="learn" element={<StudentLearn />} />
          <Route path="achievements" element={<StudentAchievements />} />
          <Route path="notifications" element={<StudentNotifications />} />
        </Route>

        {/* Teacher Routes */}
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<TeacherHome />} />
          <Route path="review" element={<TeacherReview />} />
          <Route path="review/:id" element={<TeacherReviewDetail />} />
          <Route path="review/approved" element={<TeacherReviewApproved />} />
          <Route path="review/rejected" element={<TeacherReviewRejected />} />
          <Route path="students" element={<TeacherStudents />} />
          <Route path="classes" element={<TeacherClasses />} />
          <Route path="tasks" element={<TeacherTasks />} />
          <Route path="tasks/new" element={<TeacherTaskNew />} />
          <Route path="grading" element={<TeacherGrading />} />
          <Route path="scores" element={<TeacherScores />} />
          <Route path="reports" element={<TeacherReports />} />
          <Route path="export" element={<TeacherExport />} />
          <Route path="notifications" element={<TeacherNotifications />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="metrics" element={<AdminMetrics />} />
          <Route path="departments" element={<AdminDepartments />} />
          <Route path="classes" element={<AdminClasses />} />
          <Route path="semesters" element={<AdminSemesters />} />
          <Route path="teachers" element={<AdminTeachers />} />
          <Route path="students" element={<AdminStudents />} />
          <Route path="permissions" element={<AdminPermissions />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="points" element={<AdminPoints />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
