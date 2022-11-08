const Footer = ({ designer }) => {
  return (
    <div className="flex flex-1 flex-col justify-end pb-10 mt-4">
      <p className="font-light text-xs tracking-tight m-0 leading-tight mb-2">
        Design by
      </p>
      <a href="https://www.linkedin.com/in/edu-as" target="blank">
        <p className="text-xxs font-semibold tracking-tight m-0 leading-tight">
          {designer}
        </p>
      </a>
    </div>
  )
}

export default Footer
